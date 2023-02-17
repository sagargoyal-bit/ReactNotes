import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../utils/useContext";
import { useSelector } from "react-redux";

const Title = () => <h1>This is title</h1>;
const Header = () => {
  
const {user}=useContext(userContext)

const cartItems = useSelector(store=>store.cart.items)
  
  return (
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
          <li className="px-2">
            <Link to="/cart">Cart-{cartItems.length}</Link>
          </li>
        </ul>
      </div>
      <div className="mr-5">{user.name}</div>
    </div>
  );};
export default Header

