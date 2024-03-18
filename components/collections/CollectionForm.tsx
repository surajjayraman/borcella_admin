"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Separator } from "../ui/separator";

const formSchema = z.object({
  title: z.string().min(2).max(20),
  description: z.string().min(2).max(500).trim(),
  image: z.string(),
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
