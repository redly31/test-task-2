import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import factsPagination from "@entities/fact/slice/factsPaginationSlice";
import breedsPagination from "@entities/breed/slice/breedsPaginationSlice";
import sortedBreeds from "@entities/breed/slice/breedsSortingSlice";
import { breedsApi } from "@entities/breed/api/breedsApi";
import { factsApi } from "@entities/fact/api/factsApi";

export const store = configureStore({
  reducer: {
    [factsApi.reducerPath]: factsApi.reducer,
    [breedsApi.reducerPath]: breedsApi.reducer,
    factsPagination: factsPagination,
    breedsPagination: breedsPagination,
    sortedBreeds: sortedBreeds,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
        factsApi.middleware,
        breedsApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;