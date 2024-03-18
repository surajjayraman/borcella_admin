import { CldUploadWidget } from "next-cloudinary";
import { Plus } from "lucide-react";

import { Button } from "../ui/button";

interface ImageUploadProps {
  value: string[];
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  onRemove,
  value,
}) => {
  return (
    <CldUploadWidget uploadPreset="ypgbzet3">
      {({ open }) => {
        return (
          <Button className="bg-grey-1 text-white" onClick={() => open()}>
            <Plus className="h-4 w-4 mr-2" />
            Upload Image
          </Button>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
