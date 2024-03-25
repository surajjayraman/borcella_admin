import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { collectionId: string } }
) => {
  try {
  } catch (error) {
    console.log("collectionId_DELETE", error);
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
};
