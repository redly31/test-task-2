import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CatFactsResponse } from "../model/factsResponse";

export const factsApi = createApi({
  reducerPath: "factsApi",
  tagTypes: ["Facts"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://catfact.ninja/" }),
  endpoints: (build) => ({
    getFacts: build.query<CatFactsResponse, number>({
      query: () => `facts`,
    })
  }),
});

export const { useGetFactsQuery } = factsApi;
