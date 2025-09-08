/**
 * Application constants and configuration values
 */

// Application metadata
export const APP_CONFIG = {
  name: 'Next.js Enterprise Template',
  description: 'A sophisticated Next.js template with enterprise-level standards',
  version: '1.0.0',
  author: 'Enterprise Team',
  url: 'https://localhost:3000',
} as const;

// Contact information template
export const CONTACT_INFO = {
  phone: '(555) 123-4567',
  email: 'contact@example.com',
  address: {
    street: '123 Business Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States',
  },
  businessHours: {
    weekdays: '9:00 AM - 6:00 PM',
    weekends: '10:00 AM - 4:00 PM',
    timezone: 'EST',
  },
} as const;

// Common service categories for business applications
export const SERVICE_CATEGORIES = {
  consulting: 'Consulting',
  development: 'Development',
  support: 'Support',
  maintenance: 'Maintenance',
} as const;

// Common service types
export const SERVICES = {
  webDevelopment: 'Web Development',
  mobileApps: 'Mobile Applications',
  consulting: 'Technical Consulting',
  maintenance: 'System Maintenance',
  support: 'Customer Support',
  training: 'Training & Education',
} as const;

// Response times for service requests
export const RESPONSE_TIMES = {
  immediate: 'Within 1 hour',
  urgent: '2-4 hours',
  standard: '24-48 hours',
  scheduled: 'Scheduled appointment',
} as const;

// Pricing tiers template
export const PRICING_TIERS = {
  basic: {
    name: 'Basic Plan',
    price: 99,
    description: 'Essential features for small projects',
  },
  professional: {
    name: 'Professional Plan',
    price: 199,
    description: 'Advanced features for growing businesses',
  },
  enterprise: {
    name: 'Enterprise Plan',
    price: 399,
    description: 'Full-featured solution for large organizations',
  },
} as const;

// Social media links template
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/yourcompany',
  twitter: 'https://twitter.com/yourcompany',
  instagram: 'https://instagram.com/yourcompany',
  linkedin: 'https://linkedin.com/company/yourcompany',
  youtube: 'https://youtube.com/c/yourcompany',
} as const;

// SEO constants
export const SEO_CONFIG = {
  defaultTitle: 'Next.js Enterprise Template',
  titleTemplate: '%s | Next.js Enterprise Template',
  defaultDescription:
    'A sophisticated Next.js template with enterprise-level standards, modern tooling, and best practices.',
  keywords: [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Enterprise',
    'Template',
    'Modern Web Development',
    'Best Practices',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Next.js Enterprise Template',
  },
} as const;

// API endpoints template
export const API_ENDPOINTS = {
  auth: '/api/auth',
  users: '/api/users',
  contact: '/api/contact',
  newsletter: '/api/newsletter',
  analytics: '/api/analytics',
  health: '/api/health',
} as const;

// Form validation constants
export const VALIDATION_RULES = {
  name: {
    minLength: 2,
    maxLength: 50,
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  phone: {
    pattern: /^(\+1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/,
  },
  message: {
    minLength: 10,
    maxLength: 1000,
  },
  password: {
    minLength: 8,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
  },
} as const;

// Animation durations (in milliseconds)
export const ANIMATION_DURATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
  extraSlow: 1000,
} as const;

// Breakpoints (matching Tailwind CSS)
export const BREAKPOINTS = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Z-index layers
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  toast: 1080,
} as const;

// Error messages
export const ERROR_MESSAGES = {
  generic: 'Something went wrong. Please try again.',
  network: 'Network error. Please check your connection.',
  validation: 'Please check your input and try again.',
  unauthorized: 'You are not authorized to perform this action.',
  notFound: 'The requested resource was not found.',
  serverError: 'Server error. Please try again later.',
  timeout: 'Request timed out. Please try again.',
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  saved: 'Changes saved successfully!',
  created: 'Item created successfully!',
  updated: 'Item updated successfully!',
  deleted: 'Item deleted successfully!',
  sent: 'Message sent successfully!',
  subscribed: 'Successfully subscribed!',
} as const;

// Feature flags
export const FEATURE_FLAGS = {
  enableAnalytics: true,
  enableNewsletter: true,
  enableDarkMode: true,
  enableNotifications: true,
  enableChat: false,
  enableBeta: false,
} as const;

// Cache durations (in seconds)
export const CACHE_DURATIONS = {
  short: 300, // 5 minutes
  medium: 3600, // 1 hour
  long: 86400, // 24 hours
  week: 604800, // 7 days
} as const;

// HTTP status codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
} as const;

// Environment types
export const ENVIRONMENTS = {
  DEVELOPMENT: 'development',
  STAGING: 'staging',
  PRODUCTION: 'production',
  TEST: 'test',
} as const;
