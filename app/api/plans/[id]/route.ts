export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // your existing code stays here
    // example:

    const enrichedPlans = sortedPlans.map((plan) => ({
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