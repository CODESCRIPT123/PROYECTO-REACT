// ProductDetail
import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../services/api";
import { CartContext } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    getProductById(id).then((data) => setProduct(data));
  }, [id]);

  if (!product) return <div className="text-center py-10 font-medium">Cargando...</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row my-8">
      <div className="md:w-1/2">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-96 object-cover bg-gray-100"
        />
      </div>
      <div className="md:w-1/2 p-8 flex flex-col justify-center">
        <Link to="/" className="text-blue-500 hover:text-blue-700 mb-4 inline-block transition-colors">
          &larr; Volver a la tienda
        </Link>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
        <p className="text-gray-600 mb-6 text-lg">{product.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-3xl font-bold text-blue-600">${product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium text-lg"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}