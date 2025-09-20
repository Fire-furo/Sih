import { PrismaClient } from '@prisma/client';

// Augment the NodeJS global type to avoid TS errors
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Reuse the same PrismaClient instance in dev to avoid exhausting DB connections
export const prismaa =
  global.prisma ??
  new PrismaClient({
    // optional: enable logs while debugging
    // log: ['query', 'error', 'warn'],
  });

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prismaa;
}

export default prismaa;
