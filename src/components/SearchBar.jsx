import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex justify-center">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={query}
        onChange={handleChange}
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 transition-colors shadow-sm font-medium"
      >
        Buscar
      </button>
    </form>
  );
}