import { prisma } from './lib/prisma';

async function main() {
  try {
    const plans = await prisma.plan.findMany({
      where: { city: "Pune" },
      include: {
        host: { select: { id: true, name: true, image: true } },
        participants: {
          include: {
            user: { select: { id: true, name: true, image: true } },
          },
        },
      },
      orderBy: { dateTime: "asc" },
    });
    console.log("Success! Found plans:", plans.length);
  } catch (err) {
    console.error("Error querying DB:", err);
  } finally {
    // try to exit
    process.exit(0);
  }
}
main();
