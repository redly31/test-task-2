import { BreedsList } from "@widgets/breedsList";
import { Pagination } from "@features/breeds-pagination";
import { Sorting } from "@features/breeds-sorting";


export function BreedsPage() {
  return (
    <div>
      <Pagination/>
      <Sorting/>
      <BreedsList/>
    </div>
  )
}
