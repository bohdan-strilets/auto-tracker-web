import { envSchema } from './env-schema';

const parsed = envSchema.safeParse(import.meta.env);

if (!parsed.success) {
  console.error('Invalid environment variables:');

  parsed.error.issues.forEach((issue) => {
    console.error(`${issue.path.join('.')}: ${issue.message}`);
  });

  throw new Error('Invalid environment variables');
}

export const env = parsed.data;
