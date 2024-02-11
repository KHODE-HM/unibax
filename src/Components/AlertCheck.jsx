import { Alert, Typography } from "@material-tailwind/react";
import { useState } from "react";

function IconOutlined() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6 bg-blue-gray-500 rounded-xl"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  );
}
export default function AlertCheck({
  Title,
  Paragraph = "",
  Paragraph2 = "",
  Paragraph3 = "",
}) {
  const [dismiss, setDismiss] = useState(true);
  return (
    <>
      <div className="mt-2 p-5 w-2rem ">
        <Alert
          icon={<IconOutlined />}
          open={dismiss}
          onClose={() => setDismiss(false)}
          className="text-pretty rounded-xl shadow-xl bg-white-50"
        >
          <Typography className="text-xl  font-extrabold">{Title}</Typography>
          <ul className="mt-2  list-inside list-disc">
            <Typography>{Paragraph}</Typography>

            <br />
            {Paragraph2}
            <br />
            {Paragraph3}
          </ul>
        </Alert>
      </div>
    </>
  );
}
