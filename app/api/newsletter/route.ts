
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = body?.email;

    if (
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 422 }
      );
    }

    // TODO:
    // Save the email to your database or newsletter provider.

    return NextResponse.json(
      {
        success: true,
        message:
          "Email validated successfully. Subscription storage is not configured yet.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request. Please try again.",
      },
      { status: 400 }
    );
  }
}
