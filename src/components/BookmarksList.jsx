import React, {useEffect, useState} from "react";
import {fetchAllBookmarks} from "../services/api/bookmarks.js";
import BookmarkItem from "./BookmarkItem.jsx";

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
            <BookmarkItem data={bookmark}></BookmarkItem>
          )
      })}
    </section>
  );
}

export default BookmarksList;
