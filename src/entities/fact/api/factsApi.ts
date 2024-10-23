import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CatFactsResponse } from "../model/factsResponse";

type Pagination = {
  limit: number;
  page: number;
}

export const factsApi = createApi({
  reducerPath: "factsApi",
  tagTypes: ["Facts"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://catfact.ninja/" }),
  endpoints: (build) => ({
    getFacts: build.query<CatFactsResponse, Pagination>({
      query: ({limit, page}) => `facts?limit=${limit}&page=${page}`,
    })
  }),
});

export const { useGetFactsQuery } = factsApi;
