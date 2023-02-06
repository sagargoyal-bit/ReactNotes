import { Link } from "react-router-dom";

const Title = () => <h1>This is title</h1>;
const Header = () => (
  <div className="header">
    <Title />
    <div className="nav-items">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/instamart">Instamart</Link>
        </li>
      </ul>
    </div>
  </div>
);
export default Header

