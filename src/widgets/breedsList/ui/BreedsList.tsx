import { IBreed } from "@entities/breed/model/breed";
import "./breedsList.css";
import { Loader } from "@shared/ui/loader";
import { useAppSelector } from "@shared/hooks/redux";

export function BreedsList() {
  const sortedBreeds = useAppSelector(state => state.sortedBreeds.sortedBreeds)

  if(sortedBreeds.length === 0) {
    return <Loader/>
  }

  return <div className="breeds__list">
    {sortedBreeds.map((breed: IBreed) => (
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
