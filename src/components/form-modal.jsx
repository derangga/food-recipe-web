"use client";
import foodCategory from "@/utils/food-category";
import { useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Select,
  SelectItem,
} from "@heroui/react";
import { TipTap } from "./tiptap";

export const FormModal = ({
  isDismissable = true,
  clearContentOnClose = false,
  submitTitle = "Add Recipe",
  isOpen,
  error,
  isLoading,
  formContent,
  onOpenChange,
  onSubmitAction,
}) => {
  const [content, setContent] = useState(formContent?.content || "");
  const [category, _] = useState(formContent?.category || "");

  const handleContentChange = (content) => {
    setContent(content);
  };

  const handleSubmit = async (event, actionCloseDialog) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("content", content);

    const shouldDismissed = await onSubmitAction(formData);

    if (shouldDismissed) {
      setContent("");
      actionCloseDialog();
    }
  };

  const resetContent = () => {
    if (clearContentOnClose) setContent("");
  };

  return (
    <Modal
      isOpen={isOpen}
      placement="top-center"
      onOpenChange={onOpenChange}
      onClose={resetContent}
      isDismissable={isDismissable}
      isKeyboardDismissDisabled={!isDismissable}
      size="2xl"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Add new recipe
            </ModalHeader>
            <ModalBody>
              <form onSubmit={(e) => handleSubmit(e, onClose)}>
                <Input
                  name="title"
                  label="Recipe title"
                  placeholder="Enter your recipe name"
                  variant="bordered"
                  className="mt-2"
                  defaultValue={formContent?.title}
                />
                <Select
                  variant="bordered"
                  name="category"
                  label="Select category"
                  className="mt-2"
                  defaultSelectedKeys={[category]}
                >
                  {foodCategory.map((e) => (
                    <SelectItem key={e.toLowerCase()}>{e}</SelectItem>
                  ))}
                </Select>
                <Input
                  name="image"
                  label="Image URL"
                  placeholder="A URL of your image food"
                  variant="bordered"
                  className="mt-2"
                  defaultValue={formContent?.image}
                />
                <TipTap
                  content={content}
                  onChange={(newContent) => handleContentChange(newContent)}
                  className="mt-2"
                />

                <div className="flex flex-row justify-between mt-5 items-center space-x-2">
                  <div className="line-clamp-2 text-red-500 text-sm">
                    {error}
                  </div>
                  <div className="flex flex-row w-fit space-x-3">
                    <Button color="danger" variant="flat" onPress={onClose}>
                      Close
                    </Button>
                    <Button
                      type="submit"
                      color="success"
                      className="text-white"
                      isLoading={isLoading}
                    >
                      {isLoading ? "Save Recipe" : submitTitle}
                    </Button>
                  </div>
                </div>
              </form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default FormModal;
