import { Alert, Typography } from "@material-tailwind/react";

function IconOutlined() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  );
}

export default function AlertCheck({ Title, Paragraph = "", Paragraph2 = "" }) {
  return (
    <div className="flex w-full flex-col gap-2">
      <Alert icon={<IconOutlined />} className="text-center" variant="filled">
        <Typography className="font-medium">{Title}</Typography>
        <ul className="mt-2 ml-2 list-inside list-disc">
          {Paragraph}
          {Paragraph2}
        </ul>
      </Alert>
    </div>
  );
}