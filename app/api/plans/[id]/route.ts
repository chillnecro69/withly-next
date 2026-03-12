import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const plan = await prisma.plan.findUnique({
      where: { id },
      include: {
        host: { select: { id: true, name: true, photo: true, bio: true } },
        participants: {
          include: {
            user: { select: { id: true, name: true, photo: true, bio: true } },
          },
          orderBy: { joinedAt: "asc" },
        },
      },
    });

    if (!plan) {
      return NextResponse.json({ error: "Plan not found" }, { status: 404 });
    }

    return NextResponse.json({
      plan: {
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
        hostBio: plan.host.bio,
        createdAt: plan.createdAt,
        participantsCount: plan.participants.length,
        isFull: plan.participants.length >= plan.maxParticipants,
        participants: plan.participants.map((p) => ({
          id: p.user.id,
          name: p.user.name,
          photo: p.user.photo,
          bio: p.user.bio,
          joinedAt: p.joinedAt,
        })),
      },
    });
  } catch (error) {
    console.error("Fetch plan error:", error);
    return NextResponse.json(
      { error: "Failed to fetch plan" },
      { status: 500 }
    );
  }
}