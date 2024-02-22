import React, {useEffect, useState} from "react";
import {fetchAllBookmarks} from "../services/api/bookmarks.js";
import BookmarkItem from "./BookmarkItem.jsx";
import {extractPaginationFromHydraView} from "../services/transformers/paginationFromHydraView.js";
import Pagination from "./Pagination.jsx";

function BookmarksList() {
  const [bookmarksData, setBookmarksData] = useState([]);
  const [bookmarksPagination, setBookmarksPagination] = useState([]);
  useEffect(() => {
    fetchAllBookmarks().then((collection)=> {
      setBookmarksData(collection['hydra:member']);
      setBookmarksPagination(collection['hydra:view']);
    })
  },[]);
  let pagination=extractPaginationFromHydraView(bookmarksPagination);
  console.log(pagination);
  return (
    <>
      <div className="bookmarks__list">
        <section className="bookmarks">
          {bookmarksData.map((bookmark)=> {
            return (
                <BookmarkItem data={bookmark}></BookmarkItem>
              )
          })}
        </section>
      </div>
      <Pagination pagination={pagination}></Pagination>
    </>
  );
}

export default BookmarksList;
