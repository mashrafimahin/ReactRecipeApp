import { useState, useContext } from "react";
// Styled
import { Main } from "../../Style/Comp.Style";

// Components
import NavBar from "../NavBar";
import Home from "../Home";
import Recipe from "../AllRecipe";
import Footer from "../Footer";
import DailyRecipe from "../Suggession";
import PopUp from "./PopUp";

// ChatBot
import ChatBox from "../../ChatBot/ChatBox";

// context api
import SearchContext from "../../Context/SearchContext";
import { FirebaseContext } from "../../Context/FirebaseContext";

function MainComp() {
  const { check } = useContext(FirebaseContext);
  const [searchValue, setSearchValue] = useState("");
  const [show, setShow] = useState(true);
  const [popup, setPopup] = useState(false);
  const [meal, setMeal] = useState([]);

  return (
    <Main>
      <NavBar />
      <SearchContext.Provider
        value={{
          input: searchValue,
          edit: setSearchValue,
          setComponent: setShow,
        }}
      >
        <Home />
        {show && <DailyRecipe />}
        <Recipe setPopup={setPopup} setMeal={setMeal} />
      </SearchContext.Provider>
      <Footer />
      {check && <ChatBox />}
      {popup && <PopUp setPopup={setPopup} meal={meal} />}
    </Main>
  );
}

export default MainComp;
