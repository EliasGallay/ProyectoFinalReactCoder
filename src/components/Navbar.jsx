import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 text-black flex justify-between items-center shadow-md">
      <div className="text-lg font-bold">My Website</div>
      <div className="flex space-x-4 items-center">
        <p className="hover:text-gray-400 cursor-pointer">Inicio</p>
        <p className="hover:text-gray-400 cursor-pointer">Tienda</p>
        <p className="hover:text-gray-400 cursor-pointer">Ropa</p>
        <p className="hover:text-gray-400 cursor-pointer">Suplementos</p>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
