import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, category, location, city, dateTime, maxParticipants, hostId } = body;

    // Validation
    if (!title || !category || !location || !dateTime) {
      return NextResponse.json(
        { error: "Missing required fields: title, category, location, dateTime" },
        { status: 400 }
      );
    }

    // Validate maxParticipants range: 2-6, default 5
    const max = Math.min(6, Math.max(2, maxParticipants ?? 5));

    // Validate category
    const validCategories = ["Coffee", "Walks", "Food", "Events", "Fitness", "Explore City"];
    if (!validCategories.includes(category)) {
      return NextResponse.json(
        { error: `Invalid category. Must be one of: ${validCategories.join(", ")}` },
        { status: 400 }
      );
    }

    // If no hostId provided, use a default user (for now)
    let resolvedHostId = hostId;
    if (!resolvedHostId) {
      // Find or create a default user for demo purposes
      let defaultUser = await prisma.user.findFirst({ where: { email: "demo@withly.in" } });
      if (!defaultUser) {
        defaultUser = await prisma.user.create({
          data: {
            name: "Withly User",
            email: "demo@withly.in",
            city: city || "Pune",
          },
        });
      }
      resolvedHostId = defaultUser.id;
    }

    const plan = await prisma.plan.create({
      data: {
        title,
        description: description || null,
        category,
        location,
        city: city || "Pune",
        dateTime: new Date(dateTime),
        maxParticipants: max,
        hostId: resolvedHostId,
      },
      include: {
        host: { select: { id: true, name: true, photo: true } },
        participants: { include: { user: { select: { id: true, name: true, photo: true } } } },
      },
    });

    return NextResponse.json({
      success: true,
      plan: {
        ...plan,
        participantsCount: plan.participants.length,
        hostName: plan.host.name,
      },
    });
  } catch (error) {
    console.error("Create plan error:", error);
    return NextResponse.json(
      { error: "Failed to create plan" },
      { status: 500 }
    );
  }
}
