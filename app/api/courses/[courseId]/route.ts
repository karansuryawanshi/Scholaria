// import { NextResponse } from "next/server"
// import { auth } from "@clerk/nextjs/server";
// import { db } from "@/lib/db";

// export async function PATCH(
//     req:Request, 
//     {params}:{params:{courseId:string}}
//     ){
//     try {

//         console.log("Routes Enter")

//         const { userId } = await auth()
//         const {courseId} = await params;

//         const values = await req.json();

//         // console.log(values)

//         console.log("UserId",userId)

//         // if(!userId){
//         //     return new NextResponse("Unauthorised", {status:401})
//         // }

//         const course = await db?.course?.update({
//             where:{
//                 id:params?.courseId,
//                 // userId
//             },
//             data:{ 
//                 ...values
//             }
//         })

//         return NextResponse.json(course);

//     } catch (error) {
//         console.log("/api/courses/[COURSE_ID]",error)   
//         return new NextResponse("Internal Error", {status:500});
//     }
// }

// ------ GPT -------

import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    console.log("Route Enter");

    const { userId } = await auth();
    const { courseId } = await params;

    const values = await req.json();

    console.log("UserId", userId);

    // Optional: Check for auth
    // if (!userId) {
    //   return new NextResponse("Unauthorized", { status: 401 });
    // }

    const course = await db.course.update({
      where: {
        id: courseId,
        // userId: userId
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("/api/courses/[courseId]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
