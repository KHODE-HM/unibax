import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function Toastmessage({ weekInfo = null, txt, txt2, titleTxt }) {
  return (
    <Card className="mt-6 w-96 rounded-xl bg-brown-50">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 justify-center">
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
