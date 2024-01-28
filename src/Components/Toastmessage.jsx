import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function Toastmessage({ weekInfo = null, txt, txt2, titleTxt }) {
  return (
    <Card className="mt-6 w-96 bg-teal-600">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {titleTxt}
        </Typography>
        <Typography>
          {weekInfo}
          {txt} &quot;{txt2}
        </Typography>
      </CardBody>
    </Card>
  );
}
