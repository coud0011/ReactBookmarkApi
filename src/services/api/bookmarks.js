export const API_URL = "https://iut-rcc-infoapi.univ-reims.fr";

export function fetchAllBookmarks(){
  return fetch(`${API_URL}/bookmarks/bookmarks`).then(
    (response) =>
      response.json()
  );
}