// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          TechStore
        </Link>
        <div className="flex gap-6 items-center">
          <Link to="/" className="hover:text-blue-500 font-medium transition-colors">
            Home
          </Link>
          <Link to="/cart" className="relative hover:text-blue-500 font-medium transition-colors flex items-center">
            <span>🛒 Carrito</span>
            {totalItems > 0 && (
              <span className="absolute -top-3 -right-4 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}