import { createClient, type RedisClientType } from 'redis';

let redis: RedisClientType | null = null;

export async function getRedisClient(): Promise<RedisClientType | null> {
  if (!process.env.REDIS_URL) {
    console.warn('REDIS_URL not set, caching disabled');
    return null;
  }

  if (redis) {
    return redis;
  }

  try {
    redis = createClient({ url: process.env.REDIS_URL });
    redis.on('error', (err) => console.log('Redis Client Error', err));
    await redis.connect();
    return redis;
  } catch (error) {
    console.error('Failed to connect to Redis:', error);
    return null;
  }
}

export async function cacheGet<T>(key: string): Promise<T | null> {
  const client = await getRedisClient();
  if (!client) return null;

  try {
    const data = await client.get(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Cache get error:', error);
    return null;
  }
}

export async function cacheSet(
  key: string,
  value: unknown,
  expirationSeconds: number = 3600
): Promise<void> {
  const client = await getRedisClient();
  if (!client) return;

  try {
    await client.setEx(key, expirationSeconds, JSON.stringify(value));
  } catch (error) {
    console.error('Cache set error:', error);
  }
}

export async function cacheDel(key: string): Promise<void> {
  const client = await getRedisClient();
  if (!client) return;

  try {
    await client.del(key);
  } catch (error) {
    console.error('Cache delete error:', error);
  }
}
