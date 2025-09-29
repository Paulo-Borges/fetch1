import { Link } from "react-router";
const Navbar = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/dashbord">Dashbord</Link>
    </div>
  );
};
export default Navbar;
