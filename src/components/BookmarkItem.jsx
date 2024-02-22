/* eslint-disable import/extensions, no-console */
import React from "react";
import PropTypes from "prop-types";
import Rating from "./Rating.jsx";
import { avatarUrl } from "../services/api/bookmarks.js";

function BookmarkItem({ data }) {
  const decomposeUser = data.owner.split("/"); // Si vous constatez une erreur ici, c'est un problème d'IDE
  const userId = decomposeUser[decomposeUser.length - 1];
  return (
    <article key={data.id} className="bookmark">
      <Rating
        value={
          data.rateAverage // Si vous constatez une erreur ici, c'est un problème d'IDE
        }
      />
      <div className="bookmark__name">
        <a href={data.url}>{data.name}</a>
      </div>
      <img
        className="bookmark__avatar"
        alt={`Avatar de ${data.name}`}
        src={avatarUrl(userId)}
        width="20"
        height="20"
      />
    </article>
  );
}
BookmarkItem.defaultProps = {
  data: {},
};
BookmarkItem.propTypes = {
  data: PropTypes.node,
};

export default BookmarkItem;
