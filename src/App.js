import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchBooks = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}`);
      const data = await response.json();
      setBooks(data.docs.slice(0, 20)); // Limit results to 20
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Book Finder</h1>
      <SearchBar onSearch={searchBooks} />
      {loading ? (
        <p className="text-center text-blue-500">Loading...</p>
      ) : (
        <BookList books={books} />
      )}
    </div>
  );
};

export default App;
