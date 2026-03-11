import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.resolve(__dirname, "..", "dev.db");
const adapter = new PrismaBetterSqlite3({ url: dbPath });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seeding database...");

  // Clean existing data sequentially
  await prisma.participant.deleteMany({});
  await prisma.plan.deleteMany({});
  await prisma.user.deleteMany({});

  // Create users sequentially
  const swastik = await prisma.user.create({
    data: {
      name: "Swastik M.",
      email: "swastik@withly.in",
      bio: "Founder of Withly. Love exploring cafés and meeting new people.",
      interests: "Coffee, Walks, Food",
      city: "Pune",
    },
  });

  const priya = await prisma.user.create({
    data: {
      name: "Priya K.",
      email: "priya@example.com",
      bio: "Software engineer who loves weekend adventures.",
      interests: "Fitness, Explore City, Events",
      city: "Pune",
    },
  });

  const arjun = await prisma.user.create({
    data: {
      name: "Arjun D.",
      email: "arjun@example.com",
      bio: "New to Pune, looking for cool people to hang out with.",
      interests: "Coffee, Food, Events",
      city: "Pune",
    },
  });

  const neha = await prisma.user.create({
    data: {
      name: "Neha S.",
      email: "neha@example.com",
      bio: "Foodie and fitness enthusiast.",
      interests: "Food, Fitness, Walks",
      city: "Pune",
    },
  });

  const rahul = await prisma.user.create({
    data: {
      name: "Rahul T.",
      email: "rahul@example.com",
      bio: "Love comedy shows and city walks.",
      interests: "Events, Walks, Explore City",
      city: "Pune",
    },
  });

  await prisma.user.create({
    data: {
      name: "Demo User",
      email: "demo@withly.in",
      bio: "Just exploring Withly!",
      interests: "Coffee, Food",
      city: "Pune",
    },
  });

  console.log("  ✓ 6 users created");

  // Date helpers
  const today = new Date();
  const todayAt = (hours: number, minutes: number = 0) => {
    const d = new Date(today.getFullYear(), today.getMonth(), today.getDate(), hours, minutes, 0, 0);
    return d;
  };
  const tomorrowAt = (hours: number, minutes: number = 0) => {
    const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, hours, minutes, 0, 0);
    return d;
  };
  const daysFromNow = (days: number, hours: number) => {
    const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() + days, hours, 0, 0, 0);
    return d;
  };

  // Create plans sequentially
  const plan1 = await prisma.plan.create({
    data: {
      title: "Coffee Meetup at Café Paashh",
      description: "Let's grab some coffee and chat at one of Baner's coziest cafés. Newcomers welcome!",
      category: "Coffee",
      location: "Baner, Pune",
      city: "Pune",
      dateTime: todayAt(18, 0),
      maxParticipants: 5,
      hostId: swastik.id,
    },
  });

  const plan2 = await prisma.plan.create({
    data: {
      title: "Dinner with Strangers",
      description: "Good food, good conversations. Let's try the new Italian place in KP.",
      category: "Food",
      location: "Koregaon Park, Pune",
      city: "Pune",
      dateTime: todayAt(20, 0),
      maxParticipants: 6,
      hostId: priya.id,
    },
  });

  const plan3 = await prisma.plan.create({
    data: {
      title: "Morning Walk at Vetal Tekdi",
      description: "A refreshing morning walk on the Vetal Hill trail. Let's start the day right.",
      category: "Walks",
      location: "Vetal Tekdi, Pune",
      city: "Pune",
      dateTime: tomorrowAt(6, 30),
      maxParticipants: 4,
      hostId: neha.id,
    },
  });

  const plan4 = await prisma.plan.create({
    data: {
      title: "Comedy Show Night",
      description: "Open mic comedy at The Vibe Lounge. Let's laugh together!",
      category: "Events",
      location: "FC Road, Pune",
      city: "Pune",
      dateTime: todayAt(21, 0),
      maxParticipants: 5,
      hostId: rahul.id,
    },
  });

  const plan5 = await prisma.plan.create({
    data: {
      title: "Trying a new café at Balewadi High Street",
      description: "Heard great things about this new place. Who's in?",
      category: "Coffee",
      location: "Balewadi High Street, Pune",
      city: "Pune",
      dateTime: tomorrowAt(17, 0),
      maxParticipants: 4,
      hostId: arjun.id,
    },
  });

  await prisma.plan.create({
    data: {
      title: "Weekend Yoga in the Park",
      description: "Outdoor yoga session for all levels. Bring your mat!",
      category: "Fitness",
      location: "Aga Khan Palace Garden, Pune",
      city: "Pune",
      dateTime: daysFromNow(3, 7),
      maxParticipants: 6,
      hostId: neha.id,
    },
  });

  await prisma.plan.create({
    data: {
      title: "Explore the Old City",
      description: "Walking tour through Shaniwar Wada, Lal Mahal and the old bazaars.",
      category: "Explore City",
      location: "Shaniwar Wada, Pune",
      city: "Pune",
      dateTime: daysFromNow(2, 10),
      maxParticipants: 5,
      hostId: swastik.id,
    },
  });

  await prisma.plan.create({
    data: {
      title: "Street Food Crawl",
      description: "From vada pav to misal pav — a Pune street food adventure.",
      category: "Food",
      location: "Camp Area, Pune",
      city: "Pune",
      dateTime: daysFromNow(4, 18),
      maxParticipants: 5,
      hostId: rahul.id,
    },
  });

  console.log("  ✓ 8 plans created");

  // Add participants sequentially
  await prisma.participant.create({ data: { planId: plan1.id, userId: arjun.id } });
  await prisma.participant.create({ data: { planId: plan1.id, userId: neha.id } });
  await prisma.participant.create({ data: { planId: plan1.id, userId: priya.id } });
  await prisma.participant.create({ data: { planId: plan2.id, userId: swastik.id } });
  await prisma.participant.create({ data: { planId: plan2.id, userId: rahul.id } });
  await prisma.participant.create({ data: { planId: plan3.id, userId: priya.id } });
  await prisma.participant.create({ data: { planId: plan4.id, userId: swastik.id } });
  await prisma.participant.create({ data: { planId: plan4.id, userId: arjun.id } });
  await prisma.participant.create({ data: { planId: plan4.id, userId: neha.id } });
  await prisma.participant.create({ data: { planId: plan5.id, userId: swastik.id } });

  console.log("  ✓ 10 participants added");
  console.log("✅ Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
