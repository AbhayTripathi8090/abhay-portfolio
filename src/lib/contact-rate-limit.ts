import "server-only";

const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 5;

type RateLimitEntry = { count: number; resetAt: number };
type RateLimitStore = Map<string, RateLimitEntry>;

const globalForRateLimit = globalThis as typeof globalThis & { contactRateLimits?: RateLimitStore };
const rateLimits = globalForRateLimit.contactRateLimits ?? new Map();

if (process.env.NODE_ENV !== "production") globalForRateLimit.contactRateLimits = rateLimits;

export function checkContactRateLimit(identifier: string) {
  const now = Date.now();
  const current = rateLimits.get(identifier);
  if (!current || current.resetAt <= now) {
    rateLimits.set(identifier, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfterSeconds: 0 };
  }
  if (current.count >= MAX_REQUESTS) return { allowed: false, retryAfterSeconds: Math.ceil((current.resetAt - now) / 1000) };
  current.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}
