"use client";

import FormModal from "@/components/form-modal";
import EditIcon from "@/components/icons/edit-icon";
import { Button, useDisclosure } from "@heroui/react";
import { useState } from "react";
import DOMPurify from "isomorphic-dompurify";
import recipeEditAction from "@/actions/recipe-edit-action";

export const EditRecipe = ({ recipeDetail }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (formData) => {
    setError("");
    setIsLoading(true);

    formData.append("id", recipeDetail._id);
    const result = await recipeEditAction(formData);
    setTimeout(() => {}, 500);
    setIsLoading(false);

    if (!result.formValid || !result.successInsert) {
      setError(result.errorMessage);
      return false;
    }

    return true;
  };

  const formModel = {
    title: recipeDetail.recipe_name,
    content: DOMPurify.sanitize(recipeDetail.description),
    image: recipeDetail.recipe_pict,
    category: recipeDetail.category,
  };

  return (
    <>
      <Button
        isIconOnly
        color="warning"
        variant="flat"
        aria-label="Edit"
        onPress={onOpen}
      >
        <EditIcon />
      </Button>
      <FormModal
        submitTitle="Edit Recipe"
        isDismissable={false}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onSubmitAction={handleSubmit}
        error={error}
        isLoading={isLoading}
        formContent={formModel}
      />
    </>
  );
};

export default EditRecipe;
