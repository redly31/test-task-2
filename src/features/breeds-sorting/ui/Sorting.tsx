import { useEffect } from "react";
import "./sorting.css";
import { useGetBreedsQuery } from "@entities/breed/api/breedsApi";
import { Breed } from "@entities/breed/model/breed";
import { CatBreedsResponse } from "@entities/breed/model/breedsResponse";
import { sortBy } from "@entities/breed/slice/breedsSortingSlice";
import { useAppSelector, useAppDispatch } from "@shared/hooks/redux";

export function Sorting() {
  const page = useAppSelector((state) => state.factsPagination.page);
  const limit = useAppSelector((state) => state.factsPagination.limit);
  const dispatch = useAppDispatch()
  const { data, isLoading } = useGetBreedsQuery({ limit: limit, page: page }) as {
    data: CatBreedsResponse;
    isLoading: boolean;
  };
  const breeds = data?.data

  useEffect(() => {
    if (breeds && !isLoading) {
      dispatch(sortBy({ sortType: 'breed', breeds: breeds }));
    }
  }, [breeds, isLoading, dispatch]);

  const handleSort = (sortType: keyof Breed) => {
    dispatch(sortBy({sortType: sortType, breeds: breeds}))
  }

  return (
    <div className="sorting">
      Sort by
      <select className="sorting__select" onChange={e => handleSort(e.target.value as keyof Breed)}>
        <option value="breed">Breed</option>
        <option value="coat">Coat</option>
        <option value="country">Country</option>
        <option value="origin">Origin</option>
        <option value="pattern">Pattern</option>
      </select>
    </div>
  );
}
