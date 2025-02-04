"use server";

import { API_URL } from "@/utils/contants";
import { revalidatePath } from "next/cache";

export default async function recipeDeleteAction({ id, targetRevalidate }) {
  try {
    const response = await fetch(API_URL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([id]),
    });

    console.log(response.ok);
    console.log(response.status);
    if (response.ok) {
      targetRevalidate.forEach((e) => {
        revalidatePath(e);
      });
      return true;
    }
  } catch (error) {
    console.log(`[ERROR] ${error}`);
    return false;
  }
}
