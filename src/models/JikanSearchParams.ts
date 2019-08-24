export default interface JikanSearchParams {
  query: string;
  page?: number;
  limit?: number;
  orderBy?: "title" | "score" | "rating";
}
