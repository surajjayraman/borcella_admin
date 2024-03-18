"use client";

import { z } from "zod";

import { Separator } from "../ui/separator";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const CollectionForm = () => {
  return (
    <div className="p-10">
      <p className="text-heading2-bold">Create Collection</p>
      <Separator className="bg-grey-1 mt-4 mb-7" />
    </div>
  );
};

export default CollectionForm;
