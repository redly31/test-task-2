import { IBreed } from "../model/breed";

export function Breed(breed: IBreed) {

  const renderProperty = (label: string, value: string) => (
    <h2 className="breed__title">
      {label}: {value !== "" ? value : "No data"}
    </h2>
  );

  return (
    <div className="breed">
      {renderProperty("Breed", breed.breed)}
      {renderProperty("Country", breed.country)}
      {renderProperty("Origin", breed.origin)}
      {renderProperty("Coat", breed.coat)}
      {renderProperty("Pattern", breed.pattern)}
    </div>
  );
}
