export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { planId, userId } = body;

    if (!planId || !userId) {
      return NextResponse.json(
        { error: "Missing required fields: planId, userId" },
        { status: 400 }
      );
    }

    // Check if plan exists
    const plan = await prisma.plan.findUnique({
      where: { id: planId },
      include: { participants: true },
    });

    if (!plan) {
      return NextResponse.json({ error: "Plan not found" }, { status: 404 });
    }

    // Check if plan is full
    if (plan.participants.length >= plan.maxParticipants) {
      return NextResponse.json(
        { error: "This plan is already full" },
        { status: 400 }
      );
    }

    // Check if user already joined
    const existing = await prisma.participant.findUnique({
      where: { planId_userId: { planId, userId } },
    });

    if (existing) {
      return NextResponse.json(
        { error: "You have already joined this plan" },
        { status: 400 }
      );
    }

    // Check if user exists
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Add participant
    await prisma.participant.create({
      data: { planId, userId },
    });

    // Return updated count
    const updatedCount = plan.participants.length + 1;

    return NextResponse.json({
      success: true,
      participantsCount: updatedCount,
      maxParticipants: plan.maxParticipants,
    });
  } catch (error) {
    console.error("Join plan error:", error);
    return NextResponse.json(
      { error: "Failed to join plan" },
      { status: 500 }
    );
  }
}
