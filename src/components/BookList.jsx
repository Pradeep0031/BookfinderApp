import React from "react";

const BookList = ({ books }) => {
  if (books.length === 0) {
    return <p className="text-center text-gray-500">No books found. Try a different search.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {books.map((book, index) => (
        <div key={index} className="border border-gray-200 p-4 rounded-lg shadow-md">
          <img
            src={
              book.cover_i
                ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                : "https://via.placeholder.com/150?text=No+Cover" // Fallback image
            }
            alt={book.title || "No Title"}
            className="h-40 mx-auto"
          />
          <h3 className="mt-2 text-lg font-semibold text-center">
            {book.title || "Unknown Title"}
          </h3>
          <p className="text-sm text-center text-gray-600">
            {book.author_name?.join(", ") || "Unknown Author"}
          </p>
          <p className="text-sm text-center text-gray-600">
            {book.first_publish_year || "Unknown Year"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
