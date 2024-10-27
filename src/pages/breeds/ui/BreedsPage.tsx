import Pagination from "../../../features/breeds-pagination/Pagination";
import Sorting from "../../../features/breeds-sorting/Sorting";
import BreedsList from "../../../widgets/breedsList/BreedsList";

export function BreedsPage() {
  return (
    <div>
      <Pagination/>
      <Sorting/>
      <BreedsList/>
    </div>
  )
}
