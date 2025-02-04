"use server";

import { API_URL } from "@/utils/contants";

export default async function getRecipeAction() {
  try {
    const response = await fetch(API_URL);
    if (response.ok) {
      const { data } = await response.json();
      return data;
    }
  } catch (error) {
    console.log(`[ERROR] ${error}`);
    return [];
  }
}
