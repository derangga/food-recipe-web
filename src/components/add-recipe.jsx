"use client";
import { useState } from "react";
import { Button, useDisclosure } from "@heroui/react";
import PlusCircleIcon from "@/components/icons/plus-circle-icon";
import recipeInsertAction from "@/actions/recipe-insert-action";
import FormModal from "./form-modal";

export const AddRecipe = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (formData) => {
    setError("");
    setIsLoading(true);
    const result = await recipeInsertAction(formData);
    setIsLoading(false);

    if (!result.formValid || !result.successInsert) {
      setError(result.errorMessage);
      return false;
    }

    return true;
  };

  return (
    <div className="w-fit">
      <Button
        color="primary"
        variant="flat"
        onPress={onOpen}
        endContent={<PlusCircleIcon size="size-5" />}
      >
        Add new recipe
      </Button>
      <FormModal
        isDismissable={false}
        isOpen={isOpen}
        error={error}
        isLoading={isLoading}
        clearContentOnClose={true}
        onOpenChange={onOpenChange}
        onSubmitAction={handleSubmit}
      />
    </div>
  );
};
