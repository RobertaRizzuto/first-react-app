import "./index.css";
import Navbar from "../Navbar";
import Bubble from "../Bubble";

const Header = () => {
  return (
    <header className="main-header">
      <Navbar />
      <hr />
      <div className="bubble">
        <Bubble />
        <ul>
          <h2>Designer</h2>
          <h2>Front-end Developer</h2>
          <h2>Illustrator</h2>
        </ul>
      </div>
    </header>
  );
};

export default Header;
