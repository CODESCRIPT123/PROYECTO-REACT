// src/pages/Home.jsx
import { useState, useEffect } from "react";
import { getProducts, searchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [skip, setSkip] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const limit = 8; 

  useEffect(() => {
    if (searchQuery) {
      searchProducts(searchQuery).then((data) => {
        setProducts(data.products);
        setTotal(data.total);
      });
    } else {
      getProducts(limit, skip).then((data) => {
        setProducts(data.products);
        setTotal(data.total);
      });
    }
  }, [skip, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSkip(0); 
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {!searchQuery && total > limit && (
        <Pagination 
          skip={skip} 
          setSkip={setSkip} 
          limit={limit} 
          total={total} 
        />
      )}
    </div>
  );
}