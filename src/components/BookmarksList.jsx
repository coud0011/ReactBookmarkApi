import React, { useEffect, useState } from "react";
/* eslint-disable import/extensions, no-console */
import { fetchAllBookmarks } from "../services/api/bookmarks.js";
import BookmarkItem from "./BookmarkItem.jsx";
import { extractPaginationFromHydraView } from "../services/transformers/paginationFromHydraView.js";
import Pagination from "./Pagination.jsx";
import Loading from "./Loading.jsx";

function BookmarksList() {
  const [bookmarksData, setBookmarksData] = useState([]);
  const [bookmarksPagination, setBookmarksPagination] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setBookmarksData(null);
    fetchAllBookmarks(page).then((collection) => {
      setBookmarksData(collection["hydra:member"]);
      setBookmarksPagination(collection["hydra:view"]);
    });
  }, [page]);
  useEffect(() => {
    if (bookmarksData === null) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [bookmarksData]);
  const pagination = extractPaginationFromHydraView(bookmarksPagination);
  let res = (
    <>
      <Loading />
      <Pagination pagination={pagination} setPage={setPage} />
    </>
  );
  if (!loading) {
    if (bookmarksData === null) {
      setLoading(true);
    } else {
      res = (
        <>
          <div className="bookmarks__list">
            <section className="bookmarks">
              {bookmarksData.map((bookmark) => (
                <BookmarkItem data={bookmark} />
              ))}
            </section>
          </div>
          <Pagination pagination={pagination} setPage={setPage} />
        </>
      );
    }
  }
  return res;
}

export default BookmarksList;
