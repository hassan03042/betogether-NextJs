"use server";

import { revalidatePath } from "next/cache";

export const addCategory = async (obj) => {
  const added = await fetch(`${process.env.BASE_URL}api/categories`, {
    method: "POST",
    body: JSON.stringify(obj),
  });
  console.log('category added successfully')

  revalidatePath("/admin/category");
};
