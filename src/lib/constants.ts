/**
 * Application constants and configuration values
 */

// Application metadata
export const APP_CONFIG = {
  name: 'AppML Locksmith',
  description: 'Professional locksmith services in New York City',
  version: '1.0.0',
  author: 'AppML Team',
  url: 'https://appml-locksmith.com',
} as const;

// Contact information
export const CONTACT_INFO = {
  phone: '(555) 123-4567',
  email: 'info@appml-locksmith.com',
  address: {
    street: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States',
  },
  businessHours: {
    weekdays: '8:00 AM - 8:00 PM',
    weekends: '9:00 AM - 6:00 PM',
    emergency: '24/7 Emergency Service Available',
  },
} as const;

// Service categories
export const SERVICE_CATEGORIES = {
  residential: 'Residential',
  commercial: 'Commercial',
  automotive: 'Automotive',
  emergency: 'Emergency',
} as const;

// Service types
export const SERVICES = {
  lockout: 'Emergency Lockout',
  lockChange: 'Lock Change',
  lockRepair: 'Lock Repair',
  keyDuplication: 'Key Duplication',
  smartLock: 'Smart Lock Installation',
  securityUpgrade: 'Home Security Upgrade',
  commercialSystems: 'Commercial Lock Systems',
  autoKeyProgramming: 'Auto Key Programming',
} as const;

// NYC Boroughs
export const BOROUGHS = {
  manhattan: 'Manhattan',
  brooklyn: 'Brooklyn',
  queens: 'Queens',
  bronx: 'Bronx',
  statenIsland: 'Staten Island',
} as const;

// Response times
export const RESPONSE_TIMES = {
  emergency: '15-30 minutes',
  standard: '1-2 hours',
  scheduled: 'Same day or next day',
} as const;

// Pricing tiers
export const PRICING_TIERS = {
  basic: {
    name: 'Basic Service',
    price: 75,
    description: 'Standard locksmith services',
  },
  premium: {
    name: 'Premium Service',
    price: 125,
    description: 'Advanced security solutions',
  },
  emergency: {
    name: 'Emergency Service',
    price: 150,
    description: '24/7 emergency response',
  },
} as const;

// Social media links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/appml-locksmith',
  twitter: 'https://twitter.com/appml_locksmith',
  instagram: 'https://instagram.com/appml_locksmith',
  linkedin: 'https://linkedin.com/company/appml-locksmith',
  youtube: 'https://youtube.com/c/appml-locksmith',
} as const;

// SEO constants
export const SEO_CONFIG = {
  defaultTitle: 'Professional Locksmith Services in NYC | AppML Locksmith',
  titleTemplate: '%s | AppML Locksmith',
  defaultDescription:
    'Professional locksmith services in New York City. Emergency lockout, lock repair, key duplication, and security upgrades. Available 24/7.',
  keywords: [
    'locksmith',
    'NYC locksmith',
    'emergency lockout',
    'lock repair',
    'key duplication',
    'security upgrade',
    'commercial locksmith',
    'residential locksmith',
    'automotive locksmith',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'AppML Locksmith',
  },
} as const;

// API endpoints
export const API_ENDPOINTS = {
  contact: '/api/contact',
  quote: '/api/quote',
  booking: '/api/booking',
  reviews: '/api/reviews',
  services: '/api/services',
  areas: '/api/areas',
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
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  contactForm: 'Thank you for your message. We will get back to you soon!',
  booking: 'Your booking has been confirmed. We will contact you shortly.',
  newsletter: 'Successfully subscribed to our newsletter!',
  review: 'Thank you for your review!',
} as const;

// Feature flags
export const FEATURE_FLAGS = {
  enableBooking: true,
  enableReviews: true,
  enableNewsletter: true,
  enableChat: false,
  enableAnalytics: true,
} as const;

// Cache durations (in seconds)
export const CACHE_DURATIONS = {
  short: 300, // 5 minutes
  medium: 3600, // 1 hour
  long: 86400, // 24 hours
  week: 604800, // 7 days
} as const;
