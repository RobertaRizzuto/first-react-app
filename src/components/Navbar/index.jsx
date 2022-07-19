import './index.css';
import logo from './logotype.png'

const Navbar = () => {

  return (
    <nav className="main-navbar">
    <section className="logotype">
      <img className="logo" src={logo} alt="logo" />
    </section>
    <section className="dropdown">
      <ul>
        <li>
          <a href="#">About me</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
        <li>
          <a href="#">Info</a>
        </li>
      </ul>
    </section>
  </nav>
  )
}

export default Navbar;