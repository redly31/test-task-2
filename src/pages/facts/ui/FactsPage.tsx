import { PaginationControl } from "@features/facts-pagination";
import { FactsList } from "@widgets/factsList";


export function FactsPage() {
  return (
    <div>
      <PaginationControl/>
      <FactsList/>
    </div>
  )
}
