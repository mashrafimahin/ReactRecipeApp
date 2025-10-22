// Styles
import {
  ChatDiv,
  FlexPlate,
  TitleText,
  I,
  TextArea,
} from "../Style/Comp.Style";

// hooks

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faArrowUp } from "@fortawesome/free-solid-svg-icons";

// main function
function ChatBody({ func }) {
  return (
    <ChatDiv>
      {/* header area */}
      <FlexPlate
        style={{
          background: "green",
          padding: "10px 20px",
          paddingLeft: "30px",
          justifyContent: "space-between",
        }}
      >
        <TitleText style={{ color: "#fff", fontSize: "24px" }}>
          Foodie
        </TitleText>
        <I
          onClick={() => func()}
          style={{ padding: "12px", borderRadius: "100px" }}
        >
          <FontAwesomeIcon
            icon={faTimes}
            style={{ color: "#fff", fontSize: "16px", cursor: "pointer" }}
          />
        </I>
      </FlexPlate>

      {/* body area */}
      <FlexPlate
        style={{
          height: "360px",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          flexDirection: "column",
          padding: "20px 25px",
          rowGap: "20px",
        }}
      >
        {/* user message */}
        <FlexPlate style={{ width: "100%", justifyContent: "flex-end" }}>
          <TitleText
            style={{
              background: "#e0e0e0",
              padding: "10px 20px",
              borderRadius: "100px",
              fontSize: "18px",
              letterSpacing: "1px",
            }}
          >
            Hello
          </TitleText>
        </FlexPlate>

        {/* Bot message */}
        <FlexPlate style={{ width: "100%", justifyContent: "flex-start" }}>
          <TitleText
            style={{
              background: "#f4f4f4",
              padding: "10px 20px",
              borderRadius: "100px",
              fontSize: "18px",
              letterSpacing: "1px",
            }}
          >
            Hello
          </TitleText>
        </FlexPlate>
      </FlexPlate>
      {/* input area  */}
      <FlexPlate style={{ background: "#f6f6f6", padding: "10px 0" }}>
        <TextArea placeholder="Type message to generate recipe ..."></TextArea>
        <I
          style={{
            padding: "12px 10px",
            borderRadius: "100px",
            fontSize: "16px",
            marginRight: "10px",
          }}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </I>
      </FlexPlate>
    </ChatDiv>
  );
}

export default ChatBody;
