import { useGetBreedsQuery } from '@entities/breed/api/breedsApi';
import { BreedsResponse } from '@entities/breed/model/breedsResponse';
import './pagination.css'
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { useAppSelector, useAppDispatch } from '@shared/hooks/redux';
import { nextPage, prevPage, changeLimit } from '@entities/breed/slices/breedsPaginationSlice';

export function Pagination() {
  const page = useAppSelector(state => state.breedsPagination.page)
  const limit = useAppSelector(state => state.breedsPagination.limit)
  const dispatch = useAppDispatch()
  const {data} = useGetBreedsQuery({limit: limit, page: page}) as { data: BreedsResponse };
  const total = Math.ceil(data?.total / limit)
  const pagePlus = () => page < total ? dispatch(nextPage()) : null
  const pageMinus = () => page > 1 ? dispatch(prevPage()) : null
  const changeCurrentLimit = (currentLimit: number) => dispatch(changeLimit(currentLimit))

  return (
    <div className='pagination__controls'>
        <div className="pagination">
            <button onClick={pageMinus}><BsArrowLeftShort size={20}/></button>
            <h3>{page}</h3>
            <button onClick={pagePlus}><BsArrowRightShort size={20}/></button>
        </div>
        <select value={limit} onChange={e => changeCurrentLimit(Number(e.target.value))} className='limit__select'>
            <option value="10">10</option>
            <option value="5">5</option>
            <option value="50">50</option>
            <option value="1">1</option>
        </select>
    </div>
  )
}
