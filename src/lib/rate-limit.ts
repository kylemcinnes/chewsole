// Simple in-memory rate limiter
// For production, consider Redis or similar

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const limitMap = new Map<string, RateLimitEntry>();

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of limitMap.entries()) {
    if (entry.resetAt < now) {
      limitMap.delete(key);
    }
  }
}, 60000); // Every minute

export function rateLimit(
  identifier: string,
  limit: number = 10,
  windowMs: number = 60000
): { success: boolean; remaining: number } {
  const now = Date.now();
  const entry = limitMap.get(identifier);
  
  if (!entry || entry.resetAt < now) {
    limitMap.set(identifier, {
      count: 1,
      resetAt: now + windowMs,
    });
    return { success: true, remaining: limit - 1 };
  }
  
  if (entry.count >= limit) {
    return { success: false, remaining: 0 };
  }
  
  entry.count++;
  return { success: true, remaining: limit - entry.count };
}

