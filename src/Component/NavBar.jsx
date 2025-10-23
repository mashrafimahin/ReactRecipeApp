import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCake,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Navigation, TitleText, FlexPlate, NavIcon } from "../Style/Comp.Style";

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
        <TitleText
          s="2.5rem"
          f='"Metal Mania", system-ui'
          c="green"
          navs={true}
        >
          RecipeApp
        </TitleText>
      </NavLink>
      <FlexPlate style={{ gap: "25px" }}>
        {check ? (
          <NavLink to="/dashboard">
            <NavIcon>
              <AfterLogin />
            </NavIcon>
          </NavLink>
        ) : (
          <NavLink to="/login">
            <NavIcon>
              <FontAwesomeIcon
                icon={faUser}
                style={{ fontSize: "18px", cursor: "pointer" }}
              />
            </NavIcon>
          </NavLink>
        )}

        <NavIcon>
          <FontAwesomeIcon
            title="Special dish"
            icon={faCake}
            style={{ fontSize: "18px", cursor: "pointer" }}
          />
        </NavIcon>

        {check && (
          <NavIcon>
            <FontAwesomeIcon
              title="Sign Out"
              icon={faArrowRightFromBracket}
              style={{ fontSize: "18px", cursor: "pointer", marginTop: "-6px" }}
              onClick={() => {
                logOut();
                navigate("/");
              }}
            />
          </NavIcon>
        )}
      </FlexPlate>
    </Navigation>
  );
}

export default NavBar;
