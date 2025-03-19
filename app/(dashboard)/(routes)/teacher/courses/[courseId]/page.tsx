import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import React from "react";
import { redirect } from "next/navigation";
import { IconBadge } from "@/components/icon-badge";
import { LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }
  // getting course Id
  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
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
          {/* <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="text-sm text-slate-700"
          > */}
          Complete all the fields {completionText}
          {/* </motion.span> */}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <div>
          <div className="flex items-center gap-x-2">
            {/* <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2 }}
            >
              Hello */}
            <IconBadge icon={LayoutDashboard} />
            {/* </motion.div> */}
            <h2>Customize your course</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseIdPage;
