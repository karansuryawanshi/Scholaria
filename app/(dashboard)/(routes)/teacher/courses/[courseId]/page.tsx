import { auth } from "@clerk/nextjs/server";
// import { useAuth } from "@clerk/nextjs";
import { db } from "@/lib/db";
import React, { use } from "react";
import { redirect } from "next/navigation";
import { IconBadge } from "@/components/icon-badge";
import { LayoutDashboard } from "lucide-react";
import { TitleForm } from "./_components/TitleForm";
import { DescriptionForm } from "./_components/DescriptionForm";

const CourseIdPage = async ({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) => {
  const { userId } = await auth();

  // console.log("[params.courseId]", params?.courseId);

  console.log("[userId]", userId);

  // if (!userId) {
  //   return redirect("/");
  // }

  // getting course Id

  const { courseId } = await params;

  const course = await db.course.findUnique({
    where: {
      id: courseId,
    },
  });

  if (!course) {
    return redirect("/");
  }

  // Defining array for the length of work done
  const requireFields = [
    course.title,
    course.description,
    course.imageUrl,
    course.price,
    course.categoryId,
  ];

  // Calcualting total fields
  const totalFields = requireFields.length;
  // Calcualting total completed fields ans Boolean means if the value is accepted in array it will be automatically marked as true
  const completedFields = requireFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-medium">Course setup</h1>
          Complete all the fields {completionText}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <div>
          <div className="flex items-center gap-x-2">
            <IconBadge icon={LayoutDashboard} />
            <h2>Customize your course</h2>
          </div>
          <TitleForm initialData={course} courseId={course.id}></TitleForm>
          <DescriptionForm
            initialData={course}
            courseId={course.id}
          ></DescriptionForm>
        </div>
      </div>
    </div>
  );
};

export default CourseIdPage;
