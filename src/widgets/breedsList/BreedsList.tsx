import { useAppSelector } from "../../app/store";
import { Breed } from "../../entities/breed/model/breed";
import Loader from "../../shared/loader/Loader";
import "./ui/breedsList.css";

export default function FactsList() {
  const sortedBreeds = useAppSelector(state => state.sortedBreeds.sortedBreeds)
  
  if(sortedBreeds.length === 0) {
    return <Loader/>
  }

  return <div className="breeds__list">
    {sortedBreeds.map((breed: Breed) => (
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
