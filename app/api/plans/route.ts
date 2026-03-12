import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get("city") || "Pune";
    const category = searchParams.get("category");

    // Build the where clause
    const where: Record<string, unknown> = { city };
    if (category && category !== "All") {
      where.category = category;
    }

    const plans = await prisma.plan.findMany({
      where,
      include: {
        host: { select: { id: true, name: true, photo: true } },
        participants: {
          include: {
            user: { select: { id: true, name: true, photo: true } },
          },
        },
      },
      orderBy: { dateTime: "asc" },
    });

    // Compute today boundaries for sorting (today plans first)
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const todayEnd = new Date(todayStart);
    todayEnd.setDate(todayEnd.getDate() + 1);

    const tomorrowEnd = new Date(todayStart);
    tomorrowEnd.setDate(tomorrowEnd.getDate() + 2);

    // Separate into today, tomorrow, future — then concatenate
    const todayPlans = plans.filter(
      (p) => p.dateTime >= todayStart && p.dateTime < todayEnd
    );
    const tomorrowPlans = plans.filter(
      (p) => p.dateTime >= todayEnd && p.dateTime < tomorrowEnd
    );
    const futurePlans = plans.filter((p) => p.dateTime >= tomorrowEnd);
    const pastPlans = plans.filter((p) => p.dateTime < todayStart);

    const sortedPlans = [...todayPlans, ...tomorrowPlans, ...futurePlans, ...pastPlans];

    const enrichedPlans = sortedPlans.map((plan) => ({
      id: plan.id,
      title: plan.title,
      description: plan.description,
      category: plan.category,
      location: plan.location,
      city: plan.city,
      dateTime: plan.dateTime,
      maxParticipants: plan.maxParticipants,
      hostId: plan.hostId,
      hostName: plan.host.name,
      hostPhoto: plan.host.photo,
      createdAt: plan.createdAt,
      participantsCount: plan.participants.length,
      participants: plan.participants.map((p: any) => ({
        id: p.user.id,
        name: p.user.name,
        photo: p.user.photo,
        joinedAt: p.joinedAt,
      })),
      isFull: plan.participants.length >= plan.maxParticipants,
      isToday: plan.dateTime >= todayStart && plan.dateTime < todayEnd,
    }));

    return NextResponse.json({ plans: enrichedPlans });
  } catch (error) {
    console.error("Fetch plans error:", error);
    return NextResponse.json(
      { error: "Failed to fetch plans" },
      { status: 500 }
    );
  }
}
