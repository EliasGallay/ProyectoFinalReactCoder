import CartWidget from "./CartWidget";
import DropdownMenu from "./DropdownMenu";
const Navbar = () => {
  return (
    <nav className="bg-white p-4 text-black flex justify-between items-center shadow-md">
      <div className="text-lg font-bold">My Website</div>
      <div className="flex space-x-4 items-center">
        <DropdownMenu />
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
