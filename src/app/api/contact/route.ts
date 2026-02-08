import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import {
  sanitizeInput,
  isValidEmail,
  isValidContentLength,
  hasInjectionPatterns,
  sanitizeFormData,
  getClientIP,
  RateLimiter,
} from '@/utils/security';

// Initialize rate limiter: 5 requests per hour per IP
const rateLimiter = new RateLimiter(5, 3600000);

/**
 * POST /api/contact
 * Secure contact form submission endpoint with comprehensive security checks
 */
export async function POST(request: NextRequest) {
  try {
    // 1. Security: Check IP-based rate limiting (5 requests/hour)
    const clientIP = getClientIP(request.headers as Record<string, string | string[] | undefined>);
    if (rateLimiter.isLimited(clientIP)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': '3600' } }
      );
    }

    // 2. Security: Validate content-length to prevent buffer overflow
    const contentLength = request.headers.get('content-length');
    if (!isValidContentLength(contentLength, 10000)) {
      return NextResponse.json(
        { error: 'Invalid content length' },
        { status: 400 }
      );
    }

    // 3. Security: Validate content-type
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json(
        { error: 'Content-Type must be application/json' },
        { status: 400 }
      );
    }

    // 4. Parse request body with timeout
    const body = await request.json();

    // 5. Security: Input validation - check required fields
    const { name, email, phone, subject, message } = body;
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 6. Security: Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // 7. Security: Check for injection attack patterns
    const fieldsToCheck = { name, email, phone: phone || '', subject, message };
    for (const [field, value] of Object.entries(fieldsToCheck)) {
      if (typeof value === 'string' && hasInjectionPatterns(value)) {
        console.log(`[SECURITY] Injection pattern detected in ${field}: ${value}`);
        return NextResponse.json(
          { error: 'Invalid input format' },
          { status: 400 }
        );
      }
    }

    // 8. Sanitize all inputs
    const sanitized = sanitizeFormData({
      name: sanitizeInput(name as string, 100),
      email: sanitizeInput(email as string, 254),
      phone: phone ? sanitizeInput(phone as string, 20) : '',
      subject: sanitizeInput(subject as string, 200),
      message: sanitizeInput(message as string, 5000),
    }) as {
      name: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
    };

    // 9. Log contact submission (for monitoring)
    console.log(`[CONTACT] New submission from ${clientIP}: ${sanitized.email}`);

    // 10. In production, you would:
    // - Send email using SendGrid, Mailgun, or similar service
    // - Store in database
    // - Send verification email to user
    // For now, just return success

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message. We will get back to you shortly.',
        submission: {
          email: sanitized.email,
          subject: sanitized.subject,
          timestamp: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    // 11. Logging: Log error but don't expose internal details to client
    console.error('[CONTACT_ERROR]', error instanceof Error ? error.message : String(error));

    return NextResponse.json(
      { error: 'An error occurred processing your request. Please try again later.' },
      { status: 500 }
    );
  }
}

/**
 * OPTIONS /api/contact
 * Handle CORS preflight requests
 */
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGINS || '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '3600',
    },
  });
}
