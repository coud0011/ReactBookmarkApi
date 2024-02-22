export function extractPaginationFromHydraView(hydraView) {
  if (hydraView['hydra:last'] !== undefined){
    let searchParams = new URLSearchParams(hydraView['@id'])
    let hydraId = searchParams.get("/bookmarks/bookmarks?page");
    searchParams = new URLSearchParams(hydraView['hydra:first'])
    let hydraFirst = searchParams.get("/bookmarks/bookmarks?page");
    searchParams = new URLSearchParams(hydraView['hydra:last'])
    let hydraLast = searchParams.get("/bookmarks/bookmarks?page");

    let hydraPrevious = null;
    if (hydraView['hydra:previous'] !== undefined) {
      searchParams = new URLSearchParams(hydraView['hydra:previous'])
      hydraPrevious = searchParams.get("/bookmarks/bookmarks?page");
    }
    let hydraNext = null;
    if (hydraView['hydra:next'] !== undefined) {
      searchParams = new URLSearchParams(hydraView['hydra:next'])
      hydraNext = searchParams.get("/bookmarks/bookmarks?page");
    }
    return {
      current : hydraId,
      first : hydraFirst,
      previous : hydraPrevious,
      next : hydraNext,
      last : hydraLast
    };
  }else {
    return null;
  }
}
