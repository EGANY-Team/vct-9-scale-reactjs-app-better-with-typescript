import JikanSearchParams from "../models/JikanSearchParams";
import JikanSearchResult from "../models/JikanSearchResult";

const API_URL = "https://api.jikan.moe/v3";

class JikanService {
  static async search(
    searchParams: JikanSearchParams
  ): Promise<JikanSearchResult[]> {
    const { query, page = 1, limit = 10, orderBy = "title" } = searchParams;
    const url = `${API_URL}/search/anime?q=${query}&page=${page}&limit=${limit}&order_by=${orderBy}`;
    const response = await fetch(url);
    const json = await response.json();

    if (response.ok) {
      return json.results;
    }
    throw new Error(json);
  }
}

export default JikanService;
