import { Link } from "react-router-dom";

const Title = () => <h1>This is title</h1>;
const Header = () => (
  <div className="flex justify-between bg-pink-50 shadow-lg">
    <Title />
    <div className="nav-items mx-50">
      <ul className="flex py-10">
        <li className="px-2">
          <Link to="/">Home</Link>
        </li>
        <li className="px-2">
          <Link to="/contact">Contact us</Link>
        </li>
        <li className="px-2">
          <Link to="/about">About us</Link>
        </li>
        <li className="px-2">
          <Link to="/instamart">Instamart</Link>
        </li>
      </ul>
    </div>
    <div></div>
  </div>
);
export default Header

