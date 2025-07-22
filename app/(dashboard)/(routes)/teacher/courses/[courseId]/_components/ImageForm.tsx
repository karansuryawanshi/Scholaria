"use client";

import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ImageIcon, PlusCircle } from "lucide-react";
import { FileUpload } from "@/components/file-upload";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Course } from "@prisma/client";
import Image from "next/image";

interface ImageFormProps {
  initialData: Course;
  courseId: string;
}

const formSchema = z.object({
  imageUrl: z.string().min(1, {
    message: "Image is required",
  }),
});

export const ImageForm = ({ initialData, courseId }: ImageFormProps) => {
  const [isEditing, setIsEditing] = useState(true);
  const [image, setImage] = useState();
  const toggleEdit = () => {
    setIsEditing((current) => !current);
  };

  // setImage(initialData?.imageUrl);
  // console.log(initialData.imageUrl);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      imageUrl: initialData?.imageUrl || "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Value", values);
    try {
      // console.log("[courseId] Wala", courseId);
      await axios.patch(`/api/courses/${courseId}`, values);
      toast.success("Course updated");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="mt-6 bg-slate-100 rounded-md p-4">
      <div className="font-medium flex flex-wrap items-center justify-between">
        Course Image
        <Button onClick={toggleEdit} className="cursor-pointer" variant="ghost">
          {isEditing && <>Cancel</>}
          {!isEditing && !initialData?.imageUrl && (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add an image
            </>
          )}
          {!isEditing && initialData?.imageUrl && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit Image
            </>
          )}
        </Button>
        {!isEditing && !initialData.imageUrl && (
          <div className="flex items-center justify-center h-60 w-[-webkit-fill-available] bg-slate-200 rounded-md">
            <ImageIcon className="h-10 w-10 text-slate-500" />
          </div>
          // : (
          //   <div className="relative aspect-video mt-2">
          //     <Image
          //       alt="Upload"
          //       fill
          //       className="object-cover rounded-md"
          //       src={initialData?.imageUrl}
          //     />
          //   </div>
          // )
        )}
      </div>
      {isEditing && (
        <div>
          <FileUpload
            endpoint="courseImage"
            onChange={(url) => {
              if (url) onSubmit({ imageUrl: url });
            }}
          >
            <div className="text-xs text-muted-foreground mt-4">
              16:9 aspect ratio recommended
            </div>
          </FileUpload>
        </div>
      )}
      {!isEditing && initialData.imageUrl && (
        <div className="relative aspect-video mt-2">
          <Image
            alt="Upload"
            fill
            className="object-cover rounded-md"
            src={initialData?.imageUrl}
          />
        </div>
      )}
    </div>
  );
};
