"use server";

import { revalidatePath } from "next/cache";

export const addEvent = async (obj) => {
  const added = await fetch(`${process.env.BASE_URL}api/events`, {
    method: "POST",
    body: JSON.stringify(obj),
  });
  if (added.ok) {
    console.log("Event Added Successfully");

    revalidatePath("/admin/events");
  }
};

export const getEvents = async () => {
  let events = await fetch(`${process.env.BASE_URL}api/events`);
  events = await events.json();
  console.log("Events Fetched Successfully");
  return events;

  revalidatePath("/admin/category");
};
