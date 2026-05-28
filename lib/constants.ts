export const MEAL_TYPES = ['breakfast', 'lunch', 'dinner', 'snack'] as const;

export const ACTIVITY_LEVELS = [
  { value: 'sedentary', label: 'Sedentary (little or no exercise)', multiplier: 1.2 },
  { value: 'lightly_active', label: 'Lightly active (1-3 days/week)', multiplier: 1.375 },
  { value: 'moderately_active', label: 'Moderately active (3-5 days/week)', multiplier: 1.55 },
  { value: 'very_active', label: 'Very active (6-7 days/week)', multiplier: 1.725 },
  { value: 'extremely_active', label: 'Extremely active (twice per day)', multiplier: 1.9 },
] as const;

export const FITNESS_GOALS = [
  { value: 'weight_loss', label: 'Weight Loss', calorieSurplus: -500 },
  { value: 'maintenance', label: 'Maintenance', calorieSurplus: 0 },
  { value: 'lean_bulk', label: 'Lean Bulk', calorieSurplus: 250 },
  { value: 'muscle_gain', label: 'Muscle Gain', calorieSurplus: 500 },
] as const;

export const GENDERS = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
] as const;

export const IMAGE_UPLOAD_LIMITS = {
  maxSize: 10 * 1024 * 1024,
  maxFiles: 5,
  acceptedFormats: ['image/jpeg', 'image/png', 'image/webp'],
} as const;

export const RATE_LIMIT = {
  ENABLED: process.env.RATE_LIMIT_ENABLED === 'true',
  WINDOW_MS: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'),
  MAX_REQUESTS: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'),
} as const;
