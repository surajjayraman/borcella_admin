"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";

interface MultiTextProps {
  placeholder: string;
  value: string[];
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
}
const MultiText: React.FC<MultiTextProps> = ({
  placeholder,
  value,
  onChange,
  onRemove,
}) => {
  const [inputValue, setInputValue] = useState("");

  const addTag = (item: string) => {
    onChange(item);
    setInputValue("");
  };
  return (
    <>
      <Input
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            addTag(inputValue);
          }
        }}
      />
      <div className="flex gap-1 flex-wrap mt-4">
        {value.map((tag, index) => (
          <Badge key={index} className="bg-grey-1 text-white">
            {tag}
          </Badge>
        ))}
      </div>
    </>
  );
};

export default MultiText;
