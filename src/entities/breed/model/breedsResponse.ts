import { Breed } from "./breed";

interface Link {
    url: string | null;
    label: string;
    active: boolean;
  }
  
export interface CatBreedsResponse {
    current_page: number;
    data: Breed[] | never;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Link[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}