// app/api/payment/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log(body);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing request", error);
    return NextResponse.json(
      { success: false, message: "Invalid request body or processing error" },
      { status: 400 }
    );
  }
}
