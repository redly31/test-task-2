import { Pagination } from "@features/facts-pagination";
import { FactsList } from "@widgets/factsList";


export function FactsPage() {
  return (
    <div>
      <Pagination/>
      <FactsList/>
    </div>
  )
}
