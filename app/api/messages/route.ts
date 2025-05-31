import { NextRequest, NextResponse } from "next/server";
import connectToDb from "@/db/mongodb";

export const POST = async (req: NextRequest) => {
  const { message } = await req.json();

  try {
    const db = await connectToDb();
    const collection = db?.collection("messages");
    await collection.insertOne(message);

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error inserting message:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message",
        error: error instanceof Error ? error?.message : "Unknown error",
      },
      { status: 500 }
    );
  }
};
