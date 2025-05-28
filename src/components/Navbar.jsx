import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import DropdownMenu from "./DropdownMenu";
const Navbar = () => {
  return (
    <nav className="bg-white p-4 text-black flex justify-between items-center shadow-md">
      <Link to="/">
        <div className="text-lg font-bold">BookStore 📚</div>
      </Link>
      <div className="flex space-x-4 items-center">
        <DropdownMenu />
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
