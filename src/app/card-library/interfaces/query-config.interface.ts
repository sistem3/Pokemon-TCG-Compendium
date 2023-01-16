export interface QueryConfig {
  name: string;
  pageSize: number;
  page: number;
  first: number;
  orderBy?: string;
  q: string;
}
