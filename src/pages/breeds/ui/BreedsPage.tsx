import { BreedsList } from "@widgets/breedsList";
import { PaginationControl } from "@features/breeds-pagination";
import { Sorting } from "@features/breeds-sorting";


export function BreedsPage() {
  return (
    <div>
      <PaginationControl/>
      <Sorting/>
      <BreedsList/>
    </div>
  )
}
