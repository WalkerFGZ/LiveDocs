import { Editor } from "@/components/editor/Editor";
import Header from "@/components/ui/Header";
import React from "react";

const Documents = () => {
  return (
    <div>
      <Header className="text-white">
        <div className="flex w-fit items-center justify-center gap-2">
          <p className="document-title">This is a fake document title</p>
        </div>
      </Header>
      <Editor />
    </div>
  );
};

export default Documents;
