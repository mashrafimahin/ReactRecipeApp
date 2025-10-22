// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-regular-svg-icons";

// Styles
import { I } from "../Style/Comp.Style";
import ChatBody from "./ChatBody";

// Hooks
import { useState } from "react";

// Chat Function
function ChatBox() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((prevState) => !prevState);
  };

  return (
    <>
      {/* chat icon */}
      <I
        style={{
          position: "fixed",
          bottom: "5%",
          right: "2%",
          fontSize: "26px",
          borderRadius: "100px",
        }}
        onClick={() => handleClick()}
      >
        <FontAwesomeIcon icon={faComments} />
      </I>

      {/* chat box  */}
      {show && <ChatBody func={handleClick} />}
    </>
  );
}

export default ChatBox;
