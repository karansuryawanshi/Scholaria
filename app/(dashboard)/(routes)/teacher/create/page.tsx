// Page to create form using shadcn form component

"use client";

// Zod is a library. Zod helps you validate the shape and structure of data, such as user inputs, API responses,
// or any other kind of data you're working with, while also providing strong TypeScript integration.
// It makes it easy to ensure that your data matches the expected format before you process it.

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";

import {
  Form,
  FormControl,
  FormDescription,
  FormLabel,
  FormField,
  FormMessage,
  FormItem,
} from "@/components/ui/form";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is Require",
  }),
});

const CreatePage = () => {
  const router = useRouter();

  //   Shape of form
  // Zod is use to shape the form

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/course");
      router.push(`/teacher/courses/${response.data.id}`);
    } catch {
      toast.error("Something went wrong");
    }
    console.log(values);
  };

  return (
    <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
      <div>
        <h1 className="text-2xl">Name your course</h1>
        <p className="text-sm text-slate-600">
          What Would you like to name your course? Don't worry, you can change
          this latter.
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course title</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 'Advance Web Development' "
                      {...field}
                    ></Input>
                  </FormControl>
                  <FormDescription>
                    What will You Teach in this course?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Link href="/">
                <Button>Cancel</Button>
              </Link>
              <Button type="submit" disabled={!isValid || isSubmitting}>
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreatePage;
