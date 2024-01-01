import Toast from "react-bootstrap/Toast";
import { ToastBody, ToastHeader } from "react-bootstrap";
import { Media } from "reactstrap";

export default function Toastmessage({ weekInfo = null, txt, txt2, titleTxt }) {
  return (
    <div className={"ToastContainer"}
    >
      <Toast   className={"d-sm-inline-block bg-light"}>
        <ToastHeader
          closeButton={false}
          id="ToastHeader"
          className={"bg-light"}
        >
          <b >{titleTxt}</b>
        </ToastHeader>
        <ToastBody className="ToastBody" >
          {txt} {weekInfo} {txt2}
        </ToastBody>
      </Toast>
    </div>
  );
}
