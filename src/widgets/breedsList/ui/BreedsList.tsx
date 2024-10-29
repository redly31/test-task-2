import { IBreed } from "@entities/breed/model/breed";
import "./breedsList.css";
import { Loader } from "@shared/ui/loader";
import { useAppSelector } from "@shared/hooks/redux";
import { Breed } from "@entities/breed";

export function BreedsList() {
  const sortedBreeds = useAppSelector(state => state.sortedBreeds.sortedBreeds)

  if(sortedBreeds.length === 0) {
    return <Loader/>
  }

  return <div className="breeds__list">
    {sortedBreeds.map((breed: IBreed) => (
      <Breed key={Math.random()} {...breed}/>
    ))}
</div>;
}
