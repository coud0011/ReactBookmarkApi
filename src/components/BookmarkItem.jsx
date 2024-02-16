import Rating from "./Rating.jsx";
import React from "react";
import {avatarUrl} from "../services/api/bookmarks.js";

function BookmarkItem({data}){
  let decomposeUser = data.owner.split('/'); //Si vous constatez une erreur ici, c'est un problème d'IDE
  let userId= decomposeUser[decomposeUser.length-1];
  return (
    <article key={data.id} className="bookmark">
      <Rating value={data.rateAverage //Si vous constatez une erreur ici, c'est un problème d'IDE
      }>
      </Rating>
      <div className="bookmark__name">
        <a href={data.url}>
          {data.name}
        </a>
      </div>
      <img className="bookmark__avatar"
           alt={"Avatar de "+data.name}
           src={avatarUrl(userId)}
           width="20"
           height="20">
      </img>
    </article>
  )
}

export default BookmarkItem;