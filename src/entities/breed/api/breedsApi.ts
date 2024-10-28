import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BreedsResponse } from "../model/breedsResponse";

type Pagination = {
  limit: number;
  page: number;
}

export const breedsApi = createApi({
  reducerPath: "breedsApi",
  tagTypes: ["Breeds"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://catfact.ninja/" }),
  endpoints: (build) => ({
    getBreeds: build.query<BreedsResponse, Pagination>({
      query: ({limit, page}) => `breeds?limit=${limit}&page=${page}`,
    })
  }),
});

export const { useGetBreedsQuery } = breedsApi;
