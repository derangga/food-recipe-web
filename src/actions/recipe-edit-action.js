"use server";

import { API_URL } from "@/utils/contants";
import { revalidatePath } from "next/cache";

export default async function recipeEditAction(formData) {
  const id = formData.get("id");
  const title = formData.get("title");
  const category = formData.get("category");
  const content = formData.get("content");
  const imageURL = formData.get("image");

  const updateResult = {
    formValid: true,
    successInsert: false,
    errorMessage: "",
  };

  if (!title || !category || !content || !imageURL) {
    updateResult.formValid = false;
    updateResult.errorMessage = "All field must be filled";
    return updateResult;
  }
  try {
    const response = await fetch(API_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
        recipe_name: title,
        category: category,
        description: content,
        recipe_pict: imageURL,
      }),
    });

    updateResult.successInsert = response.ok;
    revalidatePath("/");
  } catch (error) {
    console.log(`[ERROR] ${error}`);
    updateResult.errorMessage = error.message;
  } finally {
    return updateResult;
  }
}
