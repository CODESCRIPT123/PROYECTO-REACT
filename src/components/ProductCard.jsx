import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover object-center bg-gray-100"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 truncate mb-2">{product.title}</h3>
        <p className="text-xl font-bold text-blue-600 mb-4">${product.price}</p>
        <div className="mt-auto flex flex-col gap-2">
          <Link
            to={`/product/${product.id}`}
            className="w-full text-center bg-gray-100 text-gray-800 py-2 rounded-md hover:bg-gray-200 transition-colors font-medium"
          >
            Ver detalle
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}