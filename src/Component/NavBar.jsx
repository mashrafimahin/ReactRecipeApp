import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCake,
  faSortDown,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Navigation, TitleText, FlexPlate } from "../Style/Comp.Style";

// router
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// component
import AfterLogin from "./AfterLogin";

// context
import { FirebaseContext } from "../Context/FirebaseContext";
import { useContext } from "react";

function NavBar() {
  const navigate = useNavigate();
  const { check, logOut } = useContext(FirebaseContext);

  return (
    <Navigation>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <TitleText s="2.5rem" f='"Metal Mania", system-ui' c="green">
          RecipeApp
        </TitleText>
      </NavLink>
      <FlexPlate style={{ gap: "25px" }}>
        {check ? (
          <NavLink to="/dashboard">
            <AfterLogin />
          </NavLink>
        ) : (
          <NavLink to="/login">
            <FontAwesomeIcon
              icon={faUser}
              style={{ fontSize: "20px", cursor: "pointer" }}
            />
          </NavLink>
        )}

        <FontAwesomeIcon
          icon={faCake}
          style={{ fontSize: "20px", cursor: "pointer" }}
        />

        <FontAwesomeIcon
          icon={check ? faArrowRightFromBracket : faSortDown}
          style={{ fontSize: "20px", cursor: "pointer", marginTop: "-6px" }}
          onClick={
            check
              ? () => {
                  logOut();
                  navigate("/");
                }
              : null
          }
        />
      </FlexPlate>
    </Navigation>
  );
}

export default NavBar;
