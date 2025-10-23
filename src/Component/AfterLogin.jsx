import { NavImg } from "../Style/Comp.Style";
import profile from "../Assets/profile.jpg";

function AfterLogin() {
  return <NavImg src={profile} title="Profile" draggable="false" />;
}

export default AfterLogin;
