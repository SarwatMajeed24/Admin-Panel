// import { connectMongoDB } from "@/libs/MongoConnect";
// import Product from "@/libs/models/Products";
//  import { NextResponse } from "next/server";

//  export async function Get(){
//     try{
//         await connectMongoDB();
//         const data = await Product.find()
//         return NextResponse.json(data)
//        }catch (error){
//         return NextResponse.json({
//             error,
//             msg:"Something went wrong"
//         },{status:400})
//        }
//  }

import { connectMongoDB } from "@/libs/MongoConnect";
import Product from "@/libs/models/Products";
import { NextResponse } from "next/server";

// Change 'Get' to 'GET' (uppercase)
export async function GET() {
  try {
    // Connect to MongoDB
    await connectMongoDB();

    // Fetch all products from the database
    const data = await Product.find();

    // Return the data as a JSON response
    return NextResponse.json(data);
  } catch (error) {
    // Handle any errors that occur
    return NextResponse.json(
      {
        error,
        msg: "Something went wrong",
      },
      { status: 400 }
    );
  }
}
