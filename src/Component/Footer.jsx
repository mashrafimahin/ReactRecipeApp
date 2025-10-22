// Styles
import { FooterPage, TitleText, P, A, FlexPlate } from "../Style/Comp.Style";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <FooterPage>
      <TitleText style={{ textTransform: "uppercase" }}>Mahin</TitleText>
      <P>
        This is a practice project includes AI integration. Keep Support Me.
      </P>
      <FlexPlate
        style={{
          gap: "20px",
          borderBottom: "1px solid #ccc",
          width: "100%",
          paddingBottom: "20px",
        }}
      >
        <A
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.facebook.com/mrdodo0"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </A>
        <A
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.instagram.com/mashrafi.devs"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </A>
        <A
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/mashrafimahin"
        >
          <FontAwesomeIcon icon={faGithub} />
        </A>
        <A
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/mashrafidevs"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </A>
      </FlexPlate>
      <P style={{ color: "#222", fontWeight: "500" }}>
        &copy; {new Date().getFullYear()} Mashrafi Mahin. All rights reserved.
      </P>
    </FooterPage>
  );
}

export default Footer;
