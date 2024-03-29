import React, { useState, useEffect } from "react";
import "../App";
import { API_URL } from "../api";
import axios from "axios";
import { useAppContext } from "./context/appContext";
import { useNavigate } from "react-router";

const BookList = () => {
  const [books, setBooks] = useState([]);

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const navigate = useNavigate();

  const favoritesCheker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book">
          <div>
            <h3 className="book-title">{book.title}</h3>
          </div>
          <div>
            <img
              src={book.image_url}
              alt="Book Cover"
              onClick={() => navigate(`/books/${book.id}`)}
            />
          </div>
          <div>
            {favoritesCheker(book.id) ? (
              <button onClick={() => removeFromFavorites(book.id)}>
                Remove From Favorites
              </button>
            ) : (
              <button onClick={() => addToFavorites(book)}>
                Add To Favorites
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
