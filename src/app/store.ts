import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from 'react-redux'
import { factsApi } from "../entities/fact/api/factsApi";
import { breedsApi } from "../entities/breed/api/breedsApi";
import factsPagination from "../entities/fact/slice/factsPaginationSlice";
import breedsPagination from "../entities/breed/slice/breedsPaginationSlice";
import sortedBreeds from "../entities/breed/slice/breedsSortingSlice";

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

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()