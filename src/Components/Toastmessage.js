import Toast from "react-bootstrap/Toast";
import { ToastBody, ToastHeader } from "react-bootstrap";

export default function Toastmessage({ weekInfo = null, txt, txt2, titleTxt }) {
  return (
    <div
      style={{ minHeight: "240px", textAlign: "center", overflow: "hidden" }}
    >
      <Toast className={"d-sm-inline-block bg-dark"}>
        <ToastHeader
          closeButton={false}
          className={"bg-dark"}
          style={{ color: "white", textAlign: "center" }}
        >
          <big>{titleTxt}</big>{" "}
        </ToastHeader>
        <ToastBody style={{ color: "white" }}>
          {txt} {weekInfo} {txt2}
        </ToastBody>
      </Toast>
    </div>
  );
}
