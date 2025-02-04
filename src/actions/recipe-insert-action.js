"use server";

import { API_URL } from "@/utils/contants";
import { revalidatePath } from "next/cache";

export default async function recipeInsertAction(formData) {
  const title = formData.get("title");
  const category = formData.get("category");
  const content = formData.get("content");
  const imageURL = formData.get("image");

  const insertResult = {
    formValid: true,
    successInsert: false,
    errorMessage: "",
  };

  if (!title || !category || !content || !imageURL) {
    insertResult.formValid = false;
    insertResult.errorMessage = "All field must be filled";
    return insertResult;
  }

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        {
          recipe_name: title,
          category: category,
          description: content,
          recipe_pict: imageURL,
        },
      ]),
    });

    insertResult.successInsert = response.ok;
    revalidatePath("/");
  } catch (error) {
    console.log(`[ERROR] ${error.message}`);
    insertResult.errorMessage = error.message;
  } finally {
    return insertResult;
  }
}
