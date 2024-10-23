import { useAppDispatch, useAppSelector } from '../../app/store';
import './ui/pagination.css'
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { changeLimit, nextPage, prevPage } from '../../entities/breed/slice/breedsPaginationSlice';
import { useGetBreedsQuery } from '../../entities/breed/api/breedsApi';
import { CatBreedsResponse } from '../../entities/breed/model/breedsResponse';

export default function Pagination() {
  const page = useAppSelector(state => state.factsPagination.page)
  const limit = useAppSelector(state => state.factsPagination.limit)
  const dispatch = useAppDispatch()
  const {data} = useGetBreedsQuery({limit: limit, page: page}) as { data: CatBreedsResponse };
  const total = Math.ceil(data?.total / limit)
  const pagePlus = () => page < total ? dispatch(nextPage()) : null
  const pageMinus = () => page > 1 ? dispatch(prevPage()) : null
  const changeCurrentLimit = (currentLimit: number) => dispatch(changeLimit(currentLimit))
  console.log(limit, page, total, data)

  return (
    <div className='pagination__controls'>
        <div className="pagination">
            <button onClick={pageMinus}><BsArrowLeftShort size={20}/></button>
            <h3>{page}</h3>
            <button onClick={pagePlus}><BsArrowRightShort size={20}/></button>
        </div>
        <select onChange={e => changeCurrentLimit(Number(e.target.value))} className='limit__select'>
            <option value="10">10</option>
            <option value="5">5</option>
            <option value="50">50</option>
            <option value="1">1</option>
        </select>
    </div>
  )
}
