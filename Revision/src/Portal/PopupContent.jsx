import { createPortal } from "react-dom";

const PopupContent = ({ copied }) => {
  return <section>{copied && <div>Copied to Clipboard!</div>}</section>;
};

export default PopupContent;
