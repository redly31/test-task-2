import { useGetFactsQuery } from "@entities/fact/api/factsApi";
import { FactsResponse } from "@entities/fact/model/factsResponse";
import { useAppSelector } from "@shared/hooks/redux";
import Pagination from "./Pagination";
import Select from "./Select";

export function PaginationControl() {

  const { page, limit } = useAppSelector((state) => state.factsPagination);
    const queryArgs = { limit: limit, page: page }
    const { data } = useGetFactsQuery(queryArgs) as {data: FactsResponse}
    const total = Math.ceil(data?.total / limit);

  return (
    <div className="pagination__controls">
        <Pagination total={total} page={page}/>
        <Select limit={limit}/>
    </div>
  )
}
