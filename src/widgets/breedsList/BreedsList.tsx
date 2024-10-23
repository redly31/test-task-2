import { useAppSelector } from "../../app/store";
import { useGetBreedsQuery } from "../../entities/breed/api/breedsApi";
import { Breed } from "../../entities/breed/model/breed";
import { CatBreedsResponse } from "../../entities/breed/model/breedsResponse";
import Loader from "../loader/Loader";
import "./ui/breedsList.css";

export default function FactsList() {
  const page = useAppSelector(state => state.factsPagination.page)
  const limit = useAppSelector(state => state.factsPagination.limit)
  const { data, isLoading, isError } = useGetBreedsQuery({
    limit: limit,
    page: page,
  }) as {
    data: CatBreedsResponse;
    isLoading: boolean;
    isError: boolean;
  };
  const breeds: Breed[] | undefined = data?.data;

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <h2 className="mt-5">Ошибка. Не удалось получить данные</h2>;
  }

  console.log(breeds)

  return <div className="breeds__list">
    {breeds.map((breed: Breed) => (
      <div key={Math.random()} className="breed">
        <h2 className="breed__title">Breed: {breed.breed !== '' ? breed.breed : "No data"}</h2>
        <h2 className="breed__title">Country: {breed.country !== '' ? breed.country : "No data"}</h2>
        <h2 className="breed__title">Origin: {breed.origin !== '' ? breed.origin : "No data"}</h2>
        <h2 className="breed__title">Coat: {breed.coat !== '' ? breed.coat : "No data"}</h2>
        <h2 className="breed__title">Pattern: {breed.pattern !== '' ? breed.pattern : "No data"}</h2>
      </div>
    ))}
</div>;
}
