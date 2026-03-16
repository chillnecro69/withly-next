import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Testing Prisma connection...');
  const count = await prisma.user.count();
  console.log(`Connection successful. User count: ${count}`);
}

main()
  .catch(e => {
    console.error('Prisma connection failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
