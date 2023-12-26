import Alert from "react-bootstrap/Alert";
import AlertHeading from "react-bootstrap/AlertHeading";
import { useState } from "react";
import { AlertLink } from "react-bootstrap";

export default function AlertCheck({
  Title,
  Paragraph,
  Paragraph2 = false,
  Paragraph3 = false,
  Style,
  dismiss = false,
}) {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert
        variant={Style}
        onClose={() => setShow(true)}
        dismissible={dismiss}
      >
        <AlertHeading>{Title}</AlertHeading>
        <div>
          <p> {Paragraph}</p>
          <p>
            <br />
            {Paragraph2}
            <br />
            {Paragraph3}
          </p>
        </div>
      </Alert>
    );
  }
}
