// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

// Styles
import {
  Container,
  TitleText,
  P,
  Box,
  Img,
  FlexPlate,
  Span,
} from "../Style/Comp.Style";

// Hooks
import { useEffect, useState } from "react";

function DailyRecipe() {
  const [dailyRecipe, setDailyRecipe] = useState([]);

  // Function to load and cache daily recipe
  const loadDailyRecipe = async () => {
    try {
      // Fetch some data
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
      );

      // checkpoint
      if (!response.ok) {
        alert("Server Error!");
        return;
      }

      // parse data
      const data = await response.json();

      const stored = localStorage.getItem("dailyRecipe");
      const oneDay = 24 * 60 * 60 * 1000;

      if (stored) {
        const parsed = JSON.parse(stored);
        const timePassed = Date.now() - parsed.timestamp;

        if (timePassed < oneDay) {
          // still valid
          setDailyRecipe(parsed.recipe);
          return;
        }
      }

      // otherwise pick a new random one
      const newDaily = data.meals
        // shuffle data
        .sort(() => 0.5 - Math.random())
        // take data
        .slice(0, 3);

      // set data to storage
      localStorage.setItem(
        "dailyRecipe",
        JSON.stringify({ recipe: newDaily, timestamp: Date.now() })
      );
      setDailyRecipe(newDaily);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadDailyRecipe();
  }, []);

  if (!dailyRecipe) return null;

  // Random info for icons
  const randomTime = Math.floor(Math.random() * (60 - 15 + 1)) + 15;
  const randomPeople = Math.floor(Math.random() * 5) + 1;

  const setIcons = [
    { type: faClock, message: `${randomTime} min` },
    { type: faUsers, message: `${randomPeople}` },
    { type: faLightbulb, message: "Easy" },
  ];

  return (
    <>
      <TitleText
        style={{ marginTop: "40px", fontSize: "32px", textAlign: "center" }}
      >
        Today's Trending
      </TitleText>
      <Container style={{ paddingTop: "50px" }}>
        {dailyRecipe.map((item, i) => (
          <Box
            key={i}
            style={{
              border: "3px solid gold",
              position: "relative",
              marginBottom: "40px",
              background: "#fffbe6",
            }}
          >
            <Span style={{ position: "absolute", top: "10px", left: "10px" }}>
              ⭐ AI Suggested
            </Span>
            <Img src={item.strMealThumb} alt={item.strMeal} draggable="false" />
            <TitleText
              style={{
                padding: "0 20px",
                marginTop: "10px",
                fontSize: "24px",
                fontWeight: "600",
                letterSpacing: "0",
              }}
            >
              {item.strMeal}
            </TitleText>
            <P style={{ padding: "0 20px" }}>
              {item.strInstructions.slice(0, 150)}...
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
                  <FontAwesomeIcon icon={item.type} style={{ color: "#555" }} />
                  <P style={{ color: "#777" }}>{item.message}</P>
                </FlexPlate>
              ))}
            </FlexPlate>
          </Box>
        ))}
      </Container>
    </>
  );
}

export default DailyRecipe;
