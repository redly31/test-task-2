import { useGetBreedsQuery } from "@entities/breed/api/breedsApi";
import { Pagination } from "./Pagination";
import Select from "./Select";
import { BreedsResponse } from "@entities/breed/model/breedsResponse";
import { useAppSelector } from "@shared/hooks/redux";

export function PaginationControl() {

    const { page, limit } = useAppSelector((state) => state.breedsPagination);
    const queryArgs = { limit: limit, page: page }
    const { data } = useGetBreedsQuery(queryArgs) as {data: BreedsResponse}
    const total = Math.ceil(data?.total / limit);

    
  return (
    <div className='pagination__controls'>
        <Pagination total={total} page={page}/>
        <Select limit={limit}/>
    </div>
  )
}
