import { Alert, Typography } from "@material-tailwind/react";
import { useState } from "react";

function IconOutlined() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      className="bg-black h-6 w-6 rounded-full"
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
  list = "",
}) {
  const [dismiss, setDismiss] = useState(true);
  return (
    <>
      <div id="Alert-container" className="text-pretty mt-2 p-2 w-2rem  my-5">
        <Alert
          icon={<IconOutlined />}
          open={dismiss}
          onClose={() => setDismiss(false)}
          className="text-balance rounded-full shadow-xl bg-white-50"
        >
          <Typography className="text-center Peyda-th">{Title}</Typography>
          <ul className={`${list} `}>
            <li>
              <Typography className=" text-md">{Paragraph}</Typography>
            </li>
            <li>
              <Typography className="text-md"> {Paragraph2}</Typography>
            </li>
            <li>
              {" "}
              <Typography className=" text-md"> {Paragraph3}</Typography>
            </li>
          </ul>
        </Alert>
      </div>
    </>
  );
}
