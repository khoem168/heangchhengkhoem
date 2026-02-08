/**
 * Secure Contact Form Component
 * Demonstrates security best practices for form handling
 * Uses validation, sanitization, and rate limiting
 */

'use client';

import { useState } from 'react';
import {
  sanitizeInput,
  isValidEmail,
  sanitizeFormData,
  hasInjectionPatterns,
  RateLimiter,
} from '@/utils/security';

// Create rate limiter: max 5 submissions per minute per user
const formSubmitLimiter = new RateLimiter(5, 60000);

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  submit?: string;
}

export default function SecureContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  /**
   * Validate individual field
   */
  const validateField = (name: string, value: string): string => {
    if (!value.trim()) {
      return `${name} is required`;
    }

    // Check for injection patterns
    if (hasInjectionPatterns(value)) {
      return `${name} contains invalid characters`;
    }

    if (name === 'email') {
      if (!isValidEmail(value)) {
        return 'Please enter a valid email address';
      }
    }

    if (name === 'name') {
      if (value.length < 2) {
        return 'Name must be at least 2 characters';
      }
      if (value.length > 100) {
        return 'Name must be less than 100 characters';
      }
    }

    if (name === 'message') {
      if (value.length < 10) {
        return 'Message must be at least 10 characters';
      }
      if (value.length > 1000) {
        return 'Message must be less than 1000 characters';
      }
    }

    return '';
  };

  /**
   * Handle input change with real-time validation and sanitization
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Sanitize input immediately
    const sanitized = sanitizeInput(value, name === 'message' ? 1000 : 500);

    // Validate and store error
    const error = validateField(name.charAt(0).toUpperCase() + name.slice(1), sanitized);

    setFormData((prev) => ({
      ...prev,
      [name]: sanitized,
    }));

    if (error && value !== '') {
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  /**
   * Validate entire form before submission
   */
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key.charAt(0).toUpperCase() + key.slice(1), value);
      if (error) {
        newErrors[key as keyof FormData] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  /**
   * Handle form submission with security measures
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check rate limiting
    const userIdentifier = `user-${Date.now()}`; // In production, use actual user IP or ID
    if (formSubmitLimiter.isLimited(userIdentifier)) {
      setErrors({ submit: 'Too many submissions. Please wait before trying again.' });
      setSubmitStatus('error');
      return;
    }

    // Validate form
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setStatusMessage('Sending your message...');

    try {
      // Sanitize the entire form data
      const formDataRecord: Record<string, string | number | boolean | string[]> = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };
      const sanitized = sanitizeFormData(formDataRecord);

      // Send to server (example endpoint)
      // In production, use a real API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add CSRF token if available from cookie
          'X-CSRF-Token': document.cookie
            .split('; ')
            .find((row) => row.startsWith('csrf-token='))
            ?.split('=')[1] || '',
        },
        body: JSON.stringify(sanitized),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Reset form on success
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      setSubmitStatus('success');
      setStatusMessage('Message sent successfully! We will get back to you soon.');
      formSubmitLimiter.reset(userIdentifier);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setStatusMessage('Failed to send message. Please try again later.');
      setErrors({
        submit: 'An error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-lg border border-cyan-500/20 bg-gradient-to-br from-slate-900/80 to-slate-800/60">
      <h2 className="text-xl font-bold text-cyan-400 mb-6">Contact Us Securely</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm text-cyan-400 mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            maxLength={100}
            required
            className={`w-full px-4 py-2 rounded bg-slate-800 border ${
              errors.name ? 'border-red-500' : 'border-cyan-500/30'
            } text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all`}
          />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm text-cyan-400 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
            className={`w-full px-4 py-2 rounded bg-slate-800 border ${
              errors.email ? 'border-red-500' : 'border-cyan-500/30'
            } text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all`}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm text-cyan-400 mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message here..."
            maxLength={1000}
            required
            rows={4}
            className={`w-full px-4 py-2 rounded bg-slate-800 border ${
              errors.message ? 'border-red-500' : 'border-cyan-500/30'
            } text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-none`}
          />
          {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
          <p className="text-xs text-gray-500 mt-1">{formData.message.length}/1000</p>
        </div>

        {/* Submit Feedback */}
        {errors.submit && <p className="text-xs text-red-500 bg-red-500/10 p-3 rounded">{errors.submit}</p>}
        {submitStatus === 'success' && (
          <p className="text-xs text-green-500 bg-green-500/10 p-3 rounded">{statusMessage}</p>
        )}
        {submitStatus === 'error' && statusMessage && !errors.submit && (
          <p className="text-xs text-red-500 bg-red-500/10 p-3 rounded">{statusMessage}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || Object.values(errors).some(Boolean)}
          className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] disabled:opacity-50 disabled:cursor-not-allowed transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <p className="text-xs text-gray-500 mt-4 text-center">
        Your data is validated and protected against security threats.
      </p>
    </div>
  );
}
