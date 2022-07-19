import "./index.css";
import FooterElements from "../FooterElements";
import Social from "../Social";

const Footer = () => {
  return (
    <footer className="main-footer">
      <h3>Roberta Rizzuto</h3>
      <hr />
      <FooterElements />
      <Social />
    </footer>
  );
};

export default Footer;
