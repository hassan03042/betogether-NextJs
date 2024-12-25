"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { addEvent } from "@/actions/events";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  startTime: z.string().min(1, "Start time is required"),
  endTime: z.string().min(1, "End time is required"),
  thumbnail: z.any().optional(),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  category: z.string(),
  lat: z.string(),
  long: z.string(),
  address: z.string().min(1, "Address is required"),
});

export default function AddEventForm({ session, categories }) {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      startTime: "",
      endTime: "",
      thumbnail: null,
      startDate: "",
      endDate: "",
      lat: "0",
      long: "0",
      address: "",
      category: "",
    },
  });

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_upload_preset");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/your_cloud_name/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    return data.secure_url;
  };

  const onSubmit = async (data) => {
    if (data.thumbnail instanceof File) {
      const uploadedUrl = await uploadToCloudinary(data.thumbnail);
      data.thumbnail = uploadedUrl;
    }

    const eventObj = {
      ...data,
      location: {
        lat: +data.lat,
        long: +data.long,
      },
      createdBy: session.user._id,
    };

    await addEvent(eventObj);
    reset();
    setIsOpen(false);
    toast({ title: "Event added successfully" });
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">Add Event</Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Add New Event</SheetTitle>
          <SheetDescription>Fill in the details for your new event.</SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Controller
              name="title"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Controller
              name="description"
              control={control}
              render={({ field }) => <Textarea {...field} />}
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
          </div>
          <div>
            <Label htmlFor="thumbnail">Thumbnail</Label>
            <Controller
              name="thumbnail"
              control={control}
              render={({ field }) => (
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => field.onChange(e.target.files[0])}
                />
              )}
            />
            {errors.thumbnail && <p className="text-red-500 text-sm">{errors.thumbnail.message}</p>}
          </div>
          {/* Add other fields here */}
          <Button type="submit">{isSubmitting ? "Loading..." : "Add Event"}</Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}
