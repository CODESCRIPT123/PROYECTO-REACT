import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value === "") {
      onSearch("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex justify-center">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={query}
        onChange={handleChange}
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors"
      >
        Buscar
      </button>
    </form>
  );
}