import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function Toastmessage({ weekInfo = null, txt, txt2, titleTxt }) {
  return (
    <Card className="mt-10 w-86 rounded-xl bg-white-500">
      <CardBody>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 justify-center"
          textGradient
        >
          {titleTxt}
        </Typography>
        <Typography>
          {txt} {weekInfo}
          {txt2}
        </Typography>
      </CardBody>
    </Card>
  );
}
