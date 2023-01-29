const Title = () => <h1>This is title</h1>;
const Header = () => (
  <div className="header">
    <Title />
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>Cart</li>
        <li>Aboutus</li>
      </ul>
    </div>
  </div>
);
export default Header

