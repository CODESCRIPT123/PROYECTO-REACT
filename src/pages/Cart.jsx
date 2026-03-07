// Cart
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tu carrito está vacío</h2>
        <Link to="/" className="text-blue-600 hover:text-blue-800 text-lg transition-colors">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto my-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Tu Carrito</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <ul className="divide-y divide-gray-200">
          {cart.map((item) => (
            <li key={item.id} className="py-4 flex items-center justify-between flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded bg-gray-100"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">
                    ${item.price} x {item.quantity}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                <span className="font-bold text-lg text-gray-800">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 font-medium transition-colors"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-2xl font-bold text-gray-800">
          Total: ${total.toFixed(2)}
        </span>
        <button className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors font-medium text-lg w-full sm:w-auto">
          Proceder al pago
        </button>
      </div>
    </div>
  );
}