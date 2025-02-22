"use client";

import { Button } from "./ui/button";
import Image from "next/image";
import { createDocument } from "@/lib/actions/room.action";
import { useRouter } from "next/navigation";

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
  const router = useRouter();
  const addDocumentHandler = async () => {
    try {
      const room = await createDocument({ userId, email });
      if (room) router.push(`/documents/${room.id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      type="submit"
      onClick={() => addDocumentHandler()}
      className="gradient-blue flex gap-1 shadow-mg"
    >
      <Image src="/assets/icons/add.svg" alt="Add" width={24} height={24} />
      <p className="hidden sm:block">start a blank document</p>
    </Button>
  );
};

export default AddDocumentBtn;
