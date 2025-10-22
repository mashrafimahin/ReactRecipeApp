// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

// Styles
import {
  TitleText,
  P,
  Container,
  Box,
  Img,
  FlexPlate,
} from "../Style/Comp.Style";

// Hooks
import { useCallback, useContext, useEffect, useState } from "react";

// Context Api
import SearchContext from "../Context/SearchContext";

// Component
import PopUp from "./Pages/PopUp";

// main function
function Recipe({ setPopup, setMeal }) {
  const [recipes, setRecipes] = useState([]);
  const { input } = useContext(SearchContext);

  const loadFunc = useCallback(async () => {
    try {
      // Fetch data
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${
          input || "chicken"
        }`
      );
      const data = await response.json();

      // Take the first few recipes
      const randomRecipes = data.meals
        // shuffle array
        .sort(() => 0.5 - Math.random())
        // take 4 random recipes
        .slice(0, 9);

      // Add data to State
      setRecipes(randomRecipes);
    } catch (error) {
      console.log(error);
    }
  }, [input]);

  // Run Load Function on Mount/ Page load
  useEffect(() => {
    loadFunc();
  }, [input]);

  return (
    <FlexPlate
      style={{
        flexDirection: "column",
        rowGap: "20px",
        paddingBottom: "100px",
      }}
    >
      <TitleText style={{ marginTop: "40px", fontSize: "32px" }}>
        All Recipes
      </TitleText>

      <Container>
        {recipes.map((meal, i) => {
          const randomTime = Math.floor(Math.random() * (60 - 15 + 1)) + 15;
          const randomPeople = Math.floor(Math.random() * 5) + 1;

          const setIcons = [
            { type: faClock, message: `${randomTime} min` },
            { type: faUsers, message: `${randomPeople}` },
            { type: faLightbulb, message: "Easy" },
          ];

          return (
            <Box
              key={i}
              onClick={() => {
                setPopup((prevState) => !prevState);
                setMeal(meal);
              }}
            >
              <Img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                draggable="false"
              />
              <TitleText
                style={{
                  padding: "0 20px",
                  marginTop: "10px",
                  fontSize: "24px",
                  fontWeight: "600",
                  letterSpacing: "0",
                }}
              >
                {meal.strMeal}
              </TitleText>
              <P style={{ padding: "0 20px" }}>
                {meal.strInstructions.slice(0, 150)}...
              </P>
              <FlexPlate
                style={{
                  justifyContent: "space-between",
                  padding: "0 20px",
                  marginTop: "20px",
                }}
              >
                {setIcons.map((item, i) => (
                  <FlexPlate key={i} style={{ gap: "4px" }}>
                    <FontAwesomeIcon
                      icon={item.type}
                      style={{ color: "#555" }}
                    />
                    <P style={{ color: "#777" }}>{item.message}</P>
                  </FlexPlate>
                ))}
              </FlexPlate>
            </Box>
          );
        })}
      </Container>
    </FlexPlate>
  );
}

export default Recipe;
