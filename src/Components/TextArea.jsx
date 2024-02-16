import { Textarea, Button, IconButton } from "@material-tailwind/react";

export function Textareas() {
  return (
    <div className="relative w-[18rem] rounded-xl bg-transparent">
      <Textarea variant="static" placeholder="نظرتو اینجا تایپ کن" rows={8} s />
      <div className="flex w-full justify-between py-1.5"></div>
    </div>
  );
}
