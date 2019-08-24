export default interface JikanSearchResult {
  url: string;
  image_url: string;
  title: string;
  airing: boolean;
  synopsis: string;
  type: string;
  episodes: number;
  score: number;
  start_date: Date;
  end_date: Date;
  rated: string;
}
