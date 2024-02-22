export const API_URL = "https://iut-rcc-infoapi.univ-reims.fr/bookmarks";

export async function fetchAllBookmarks(urlParams) {
  return fetch(`${API_URL}/bookmarks?page=${urlParams}`).then((response) => {
    const ms = 2000;
    const start = Date.now();
    let now = start;
    while (now - start < ms) {
      now = Date.now();
    }
    // eslint-disable-next-line no-console
    console.error(ms);
    return response.json();
  });
}

export function avatarUrl(userId) {
  return `${API_URL}/users/${userId}/avatar`;
}
