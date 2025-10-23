// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

// Styled
import {
  HomePage,
  TitleText,
  P,
  InputField,
  FlexPlate,
} from "../Style/Comp.Style";

// hooks
import { useContext, useEffect, useRef } from "react";

// context api
import SearchContext from "../Context/SearchContext";

// main function
function Home() {
  const inputRef = useRef(null);
  const { input, edit, setComponent } = useContext(SearchContext);

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <HomePage>
      <FlexPlate style={{ gap: "20px" }}>
        <FontAwesomeIcon
          icon={faUtensils}
          style={{ fontSize: "28px", color: "green" }}
        />
        <TitleText>FlavorFind</TitleText>
      </FlexPlate>
      <P style={{ textAlign: "center" }}>
        Discover delicious recipes with AI-powered suggestions tailored just for
        you
      </P>
      <FlexPlate
        style={{
          width: "100%",
          border: "1px solid #999",
          borderRadius: "100px",
          padding: "5px 20px",
          margin: "16px auto",
        }}
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ fontSize: "26px", color: "#333", transform: "scaleX(-1)" }}
        />
        <InputField
          ref={inputRef}
          value={input}
          onChange={(e) => edit(e.target.value)}
          placeholder="Search a recipe here ..."
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.code === 13) edit(input);
            if (input) setComponent(false);
          }}
        />
      </FlexPlate>
    </HomePage>
  );
}

export default Home;
