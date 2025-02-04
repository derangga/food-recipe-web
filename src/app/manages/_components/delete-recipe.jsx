"use client";

import recipeDeleteAction from "@/actions/recipe-delete-action";
import TrashIcon from "@/components/icons/trash-icon";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { useState } from "react";

export const DeleteRecipe = ({ id, recipeTitle }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  const deleteRecipe = async (onClose) => {
    setIsLoading(true);
    const isSuccess = await recipeDeleteAction({
      id: id,
      targetRevalidate: ["/", "/manages"],
    });

    setTimeout(() => {
      setIsLoading(false);
    }, 200);

    if (isSuccess) {
      onClose();
    }
  };

  return (
    <>
      <Button
        isIconOnly
        color="danger"
        variant="flat"
        aria-label="Delete"
        onPress={onOpen}
      >
        <TrashIcon />
      </Button>
      <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Delete Confirmation</ModalHeader>
              <ModalBody>
                <p>
                  Are you sure deleting recipe{" "}
                  <span className="font-bold">{recipeTitle}</span>
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="danger"
                  variant="flat"
                  onPress={() => deleteRecipe(onClose)}
                  isLoading={isLoading}
                >
                  {isLoading ? "Deleting.." : "Yes, delete"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteRecipe;
