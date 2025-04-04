import { createPortal } from "react-dom";

const PopupContent = ({ copied }) => {
  return createPortal(
    <section>{copied && <div>Copied to Clipboard!</div>}</section>,
    document.querySelector("#popup-content")
  );
};

export default PopupContent;
