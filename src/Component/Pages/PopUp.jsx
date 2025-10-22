import {
  Container,
  FlexPlate,
  I,
  Img,
  TitleText,
} from "../../Style/Comp.Style";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function PopUp({ setPopup, meal }) {
  const ingredient = Object.keys(meal)
    .filter((key) => key.startsWith("strIngredient") && meal[key])
    .map((item) => meal[item]);

  return (
    <Container
      style={{
        background: "rgb(0,0,0,0.4)",
        position: "fixed",
        top: "0",
        left: "0",
        height: "100dvh",
        width: "100%",
        zIndex: "99999",
        gridTemplateColumns: "1fr",
      }}
    >
      <FlexPlate
        style={{
          background: "#fff",
          borderRadius: "10px",
          position: "relative",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          rowGap: "10px",
          padding: "20px",
          overflowY: "scroll",
          overflowX: "none",
        }}
      >
        <I
          style={{
            borderRadius: "100px",
            position: "absolute",
            top: "4%",
            right: "2%",
          }}
          onClick={() => setPopup((prevState) => !prevState)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </I>

        {/* display content */}
        <Img src={meal.strMealThumb} style={{ height: "300px" }} />
        <TitleText>{meal.strMeal}</TitleText>
        <TitleText
          style={{ fontSize: "18px", letterSpacing: "0", color: "#222" }}
        >
          <span style={{ fontWeight: "600" }}>Ingredients:</span>{" "}
          {ingredient.join(", ")}
        </TitleText>
        <div style={{ height: "4px", width: "100%", background: "#f1f1f1" }}>
          &nbsp;
        </div>
        <p style={{ fontFamily: "sans-serif", lineHeight: "24px" }}>
          {meal.strInstructions}
        </p>
        <a href={meal.strYoutube} target="_blank">
          Watch on Youtube
        </a>
      </FlexPlate>
    </Container>
  );
}

export default PopUp;
