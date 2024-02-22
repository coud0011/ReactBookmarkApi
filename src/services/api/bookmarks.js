export const API_URL = "https://iut-rcc-infoapi.univ-reims.fr/bookmarks";

function delay(milliseconds){
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}
export async function fetchAllBookmarks(urlParams) {
  if (urlParams === 3) {
    const ms = 60000;
    const start = Date.now();
    let now = start;
    while (now - start < ms) {
      now = Date.now();
    }
    // eslint-disable-next-line no-console
    console.error(ms);
  }
  return fetch(`${API_URL}/bookmarks?page=${urlParams}`).then((response) =>
    response.json(),
  );
}

export function avatarUrl(userId) {
  return `${API_URL}/users/${userId}/avatar`;
}
