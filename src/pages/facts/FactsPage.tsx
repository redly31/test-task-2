import Pagination from "../../features/facts-pagination/Pagination";
import FactsList from "../../widgets/factsList/FactsList";


export default function FactsPage() {
  return (
    <div>
      <Pagination/>
      <FactsList/>
    </div>
  )
}
