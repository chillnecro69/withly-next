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

    // Check if participant record exists
    const existing = await prisma.participant.findUnique({
      where: { planId_userId: { planId, userId } },
    });

    if (!existing) {
      return NextResponse.json(
        { error: "You are not a participant of this plan" },
        { status: 400 }
      );
    }

    // Remove participant
    await prisma.participant.delete({
      where: { planId_userId: { planId, userId } },
    });

    // Return updated count
    const remainingCount = await prisma.participant.count({
      where: { planId },
    });

    return NextResponse.json({
      success: true,
      participantsCount: remainingCount,
    });
  } catch (error) {
    console.error("Leave plan error:", error);
    return NextResponse.json(
      { error: "Failed to leave plan" },
      { status: 500 }
    );
  }
}
