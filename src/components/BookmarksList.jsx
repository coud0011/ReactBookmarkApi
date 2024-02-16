import React, {useEffect, useState} from "react";
import {fetchAllBookmarks} from "../services/api/bookmarks.js";
import Rating from "./Rating.jsx";

function BookmarksList() {
  const [bookmarksData, setBookmarksData] = useState([]);
  useEffect(() => {
    fetchAllBookmarks().then((collection)=> {
      setBookmarksData(collection['hydra:member']);
    })
  },[]);
  console.log(bookmarksData)
  return (
    <section className="bookmarks">
      {bookmarksData.map((bookmark)=> {
        return (
            <article key={bookmark.id} className="bookmark">
              {bookmark.name}
              <Rating value={bookmark.rateAverage //Si vous constatez une erreur ici, c'est un problème d'IDE
                }>
              </Rating>
            </article>
          )
      })}
    </section>
  );
}

export default BookmarksList;
