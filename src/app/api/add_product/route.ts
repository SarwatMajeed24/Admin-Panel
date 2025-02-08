import { connectMongoDB } from "@/libs/MongoConnect";
import Product from "@/libs/models/Products";
 import { NextRequest, NextResponse } from "next/server";

 export async function POST(request: NextRequest){
    try{
        const body = await request.json();
        const{imgsrc, fileKey, name, category, price} = body;

        await connectMongoDB();
        const data = await Product.create({
            imgsrc, 
            fileKey, 
            name, 
            category, 
            price,

        });

        
        return NextResponse.json({msg: "Product added successfully", data})
       }catch (error){
        return NextResponse.json({
            error,
            msg:"Something went wrong"
        },{status:400})
       }
 }

// import { connectMongoDB } from "@/libs/MongoConnect";
// import Product from "@/libs/models/Products";
// import { NextRequest, NextResponse } from "next/server";

// // Define the POST method for adding a product
// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();
//     const { imgsrc, fileKey, name, category, price } = body;

//     // Connect to MongoDB
//     await connectMongoDB();

//     // Create a new product in the database
//     const data = await Product.create({
//       imgsrc,
//       fileKey,
//       name,
//       category,
//       price,
//     });

//     // Return a success response with the created product data
//     return NextResponse.json({ msg: "Product added successfully", data });
//   } catch (error) {
//     // Return an error response if something goes wrong
//     return NextResponse.json(
//       {
//         error,
//         msg: "Something went wrong",
//       },
//       { status: 400 }
//     );
//   }
// }
// import { connectMongoDB } from "@/libs/MongoConnect";
// import Product from "@/libs/models/Products";
// import { NextRequest, NextResponse } from "next/server";

// // Define the POST method for adding a product
// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();
//     const { imgsrc, fileKey, name, category, price } = body;

//     // Connect to MongoDB
//     await connectMongoDB();

//     // Create a new product in the database
//     const data = await Product.create({
//       imgsrc,
//       fileKey,
//       name,
//       category,
//       price,
//     });

//     // Return a success response with the created product data
//     return NextResponse.json({ msg: "Product added successfully", data });
//   } catch (error) {
//     // Return an error response if something goes wrong
//     return NextResponse.json(
//       {
//         error,
//         msg: "Something went wrong",
//       },
//       { status: 400 }
//     );
//   }
// }
