import Collection from "@/lib/models/Collection";
import Product from "@/lib/models/Product";
import connectToDB from "@/lib/mongoDB";
import { request } from "http";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { productId: string } }
) => {
  try {
    await connectToDB();

    const product = await Product.findById(params.productId).populate({
      path: "collections",
      model: Collection,
    });

    if (!product) {
      return new NextResponse(
        JSON.stringify({ message: "Product not found" }),
        { status: 404 }
      );
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.log("productId_GET", error);
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
};

export const POST = async (request: NextRequest, { params }: { params: { productId: string } }) => {
  try {
    await connectToDB();
    
  }catch(error){
    console.log("productId_POST", error);
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
}
