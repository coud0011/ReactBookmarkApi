import React, {useEffect, useState} from "react";
import {fetchAllBookmarks} from "../services/api/bookmarks.js";

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
      {bookmarksData.map((bookmark)=> (
        <article className="bookmark">
          {bookmark.name}
        </article>
    ))}
    </section>
  );
}

export default BookmarksList;
