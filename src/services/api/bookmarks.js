export const API_URL = "https://iut-rcc-infoapi.univ-reims.fr/bookmarks";

export function fetchAllBookmarks() {
  return fetch(`${API_URL}/bookmarks`).then(
    (response) =>
      response.json()
  );
}

export function avatarUrl(userId){
  return `${API_URL}/users/${userId}/avatar`;
}