/**
 * Security Utility Module
 * Protects against common web attacks: XSS, CSRF, injection attacks, and more
 */

/**
 * Sanitize HTML to prevent XSS attacks
 * Escapes all HTML special characters
 */
export function sanitizeHTML(input: string): string {
  if (!input || typeof input !== 'string') return '';
  
  const htmlMap: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
  };
  
  return input.replace(/[&<>"'\/]/g, (char) => htmlMap[char] || char);
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  // RFC 5322 simplified pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

/**
 * Validate phone number (international format)
 */
export function isValidPhone(phone: string): boolean {
  if (!phone || typeof phone !== 'string') return false;
  // Supports: +1234567890, (123) 456-7890, 123-456-7890, etc.
  const phoneRegex = /^[\d\s\-\(\)\+]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 8 && phone.length <= 20;
}

/**
 * Validate URL (prevents javascript: and data: URIs)
 */
export function isValidURL(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  
  // Block dangerous protocols
  if (url.match(/^(javascript|data|vbscript):/i)) return false;
  
  try {
    const parsed = new URL(url);
    return ['http:', 'https:'].includes(parsed.protocol);
  } catch {
    return false;
  }
}

/**
 * Sanitize user input - remove potentially harmful content
 */
export function sanitizeInput(input: string, maxLength: number = 500): string {
  if (!input || typeof input !== 'string') return '';
  
  return input
    .trim()
    .slice(0, maxLength)
    .replace(/[\x00-\x1F\x7F]/g, '') // Remove control characters
    .replace(/\s+/g, ' '); // Normalize whitespace
}

/**
 * Rate limiting helper - prevents brute force and spam attacks
 * Usage: Create a Map to store attempt records per identifier (IP, user ID, etc.)
 */
export class RateLimiter {
  private attempts: Map<string, { count: number; resetTime: number }> = new Map();
  private maxAttempts: number;
  private windowMs: number;

  constructor(maxAttempts: number = 5, windowMs: number = 60000) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs; // Time window in milliseconds
  }

  /**
   * Check if an identifier has exceeded rate limit
   */
  isLimited(identifier: string): boolean {
    const now = Date.now();
    const record = this.attempts.get(identifier);

    if (!record || now > record.resetTime) {
      // Reset if window has expired
      this.attempts.set(identifier, { count: 1, resetTime: now + this.windowMs });
      return false;
    }

    record.count++;
    if (record.count > this.maxAttempts) {
      return true; // Rate limit exceeded
    }

    return false;
  }

  /**
   * Reset counter for an identifier (call after successful request)
   */
  reset(identifier: string): void {
    this.attempts.delete(identifier);
  }

  /**
   * Clear all records (useful for testing or manual reset)
   */
  clear(): void {
    this.attempts.clear();
  }
}

/**
 * CSRF Token generation and validation
 * Use with secure httpOnly cookies and form tokens
 */
export function generateCSRFToken(): string {
  // Generate a random 32-character hex string
  const array = new Uint8Array(32);
  if (typeof window !== 'undefined' && window.crypto) {
    window.crypto.getRandomValues(array);
  } else {
    // For Node.js environments, use a simple random implementation
    // In production, use a crypto library like 'nanoid' or 'crypto-random-string'
    for (let i = 0; i < array.length; i++) {
      array[i] = Math.floor(Math.random() * 256);
    }
  }
  return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * Validate CSRF token against stored token
 */
export function validateCSRFToken(token: string, storedToken: string): boolean {
  if (!token || !storedToken || typeof token !== 'string' || typeof storedToken !== 'string') {
    return false;
  }
  // Use constant-time comparison to prevent timing attacks
  return constantTimeCompare(token, storedToken);
}

/**
 * Constant-time string comparison to prevent timing attacks
 */
function constantTimeCompare(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

/**
 * Sanitize form data object
 */
export function sanitizeFormData(formData: Record<string, string | number | boolean | string[]>): Record<string, string | number | boolean | string[]> {
  const sanitized: Record<string, string | number | boolean | string[]> = {};
  
  for (const [key, value] of Object.entries(formData)) {
    // Sanitize key
    if (typeof key !== 'string' || !key.match(/^[a-zA-Z0-9_-]+$/)) continue;
    
    if (typeof value === 'string') {
      sanitized[key] = sanitizeInput(value);
    } else if (typeof value === 'number' || typeof value === 'boolean') {
      sanitized[key] = value;
    } else if (Array.isArray(value)) {
      sanitized[key] = value.filter((v): v is string => typeof v === 'string').map((v) => sanitizeInput(v));
    }
  }
  
  return sanitized;
}

/**
 * Create a secure content validation function
 */
export function createValidator() {
  return {
    email: isValidEmail,
    phone: isValidPhone,
    url: isValidURL,
    html: sanitizeHTML,
    input: sanitizeInput,
    formData: sanitizeFormData,
  };
}

/**
 * Get client IP address (for rate limiting and logging)
 * Works with common proxy headers: X-Forwarded-For, CF-Connecting-IP, etc.
 */
export function getClientIP(headers: Record<string, string | string[] | undefined>): string {
  const forwarded = headers['x-forwarded-for'];
  if (forwarded) {
    return typeof forwarded === 'string' ? forwarded.split(',')[0].trim() : forwarded[0];
  }
  
  return (
    (headers['cf-connecting-ip'] as string) ||
    (headers['x-real-ip'] as string) ||
    '0.0.0.0'
  );
}

/**
 * Validate content length to prevent buffer overflow attacks
 */
export function isValidContentLength(contentLength: string | number | null | undefined, maxSize: number = 1000000): boolean {
  if (!contentLength) return false;
  const size = typeof contentLength === 'string' ? parseInt(contentLength, 10) : contentLength;
  return size > 0 && size <= maxSize;
}

/**
 * Check for common injection attack patterns
 */
export function hasInjectionPatterns(input: string): boolean {
  if (!input || typeof input !== 'string') return false;
  
  // SQL injection patterns
  if (input.match(/(\b(UNION|SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER)\b)|(--|;|\/\*|\*\/)/i)) {
    return true;
  }
  
  // NoSQL injection patterns
  if (input.match(/[\$\{\}]/)) {
    return true;
  }
  
  // Command injection patterns
  if (input.match(/[|&;`$()\\<>]/)) {
    return true;
  }
  
  return false;
}

const securityModule = {
  sanitizeHTML,
  isValidEmail,
  isValidPhone,
  isValidURL,
  sanitizeInput,
  RateLimiter,
  generateCSRFToken,
  validateCSRFToken,
  sanitizeFormData,
  createValidator,
  getClientIP,
  isValidContentLength,
  hasInjectionPatterns,
};

export default securityModule;
