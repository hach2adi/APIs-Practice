import React from "react";
import "../App";
import { useAppContext } from "./context/appContext";

const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  console.log("fav :", favorites);

  const favoritesCheker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  return (
    <div className="favorites">
      {favorites.length > 0 ? (
        favorites.map((book) => (
          <div key={book.id} className="book">
            <div>
              <h3>{book.title}</h3>
            </div>
            <div>
              <img src={book.image_url} alt="Book Cover" />
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
        ))
      ) : (
        <h1 className="zerofav">You don't have any favorite books yet!</h1>
      )}
    </div>
  );
};

export default Favorites;
