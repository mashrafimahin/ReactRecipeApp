import { Img } from "../Style/Comp.Style";
import profile from "../Assets/profile.jpg";

function AfterLogin() {
  return (
    <Img
      src={profile}
      style={{
        height: "40px",
        width: "40px",
        borderRadius: "100px",
        cursor: "pointer",
      }}
      title="Profile"
      draggable="false"
    />
  );
}

export default AfterLogin;
