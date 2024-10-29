import { changeLimit } from "@entities/breed/slices/breedsPaginationSlice";
import { useAppDispatch } from "@shared/hooks/redux";

type SelectProps = {
    limit: number;
}

export default function Select({ limit }: SelectProps) {

    const dispatch = useAppDispatch();
    const changeCurrentLimit = (currentLimit: number) => dispatch(changeLimit(currentLimit));

  return (
    <select value={limit} onChange={e => changeCurrentLimit(Number(e.target.value))} className='limit__select'>
        <option value="10">10</option>
        <option value="5">5</option>
        <option value="50">50</option>
        <option value="1">1</option>
    </select>
  )
}
