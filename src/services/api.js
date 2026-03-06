// src/services/api.js
const BASE_URL = "https://dummyjson.com"; // [cite: 142]

export const getProducts = async (limit = 8, skip = 0) => { // [cite: 144]
  const response = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip}`);
  return response.json();
};

export const searchProducts = async (query) => { // [cite: 145]
  const response = await fetch(`${BASE_URL}/products/search?q=${query}`);
  return response.json();
};

export const getProductById = async (id) => { // [cite: 146]
  const response = await fetch(`${BASE_URL}/products/${id}`);
  return response.json();
};