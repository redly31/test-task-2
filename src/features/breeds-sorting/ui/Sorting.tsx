import { useEffect } from "react";
import "./sorting.css";
import { useGetBreedsQuery } from "@entities/breed/api/breedsApi";
import { IBreed } from "@entities/breed/model/breed";
import { sortBy } from "@entities/breed/slices/breedsSortingSlice";
import { useAppSelector, useAppDispatch } from "@shared/hooks/redux";
import { BreedsQueryResponse } from "@entities/breed/model/breedsQueryResponse";

export function Sorting() {
  const dispatch = useAppDispatch()
  const { page, limit } = useAppSelector((state) => state.breedsPagination);
  const queryArgs = {limit: limit, page: page}
  const { data, isLoading } = useGetBreedsQuery(queryArgs) as BreedsQueryResponse;
  const breeds = data?.data

  useEffect(() => {
    if (breeds && !isLoading) {
      dispatch(sortBy({ sortType: 'breed', breeds: breeds }));
    }
  }, [breeds, isLoading, dispatch]);

  const handleSort = (sortType: keyof IBreed) => {
    dispatch(sortBy({sortType: sortType, breeds: breeds}))
  }

  return (
    <div className="sorting">
      Sort by
      <select className="sorting__select" onChange={e => handleSort(e.target.value as keyof IBreed)}>
        <option value="breed">Breed</option>
        <option value="coat">Coat</option>
        <option value="country">Country</option>
        <option value="origin">Origin</option>
        <option value="pattern">Pattern</option>
      </select>
    </div>
  );
}
