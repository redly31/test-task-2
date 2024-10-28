import { nextPage, prevPage } from "@entities/fact/slices/factsPaginationSlice";
import "./pagination.css";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { useAppDispatch } from "@shared/hooks/redux";

type PaginationProps = {
  page: number;
  total: number;
}

export default function Pagination({page, total}: PaginationProps) {
  
  const dispatch = useAppDispatch();
  const pagePlus = () => (page < total ? dispatch(nextPage()) : null);
  const pageMinus = () => (page > 1 ? dispatch(prevPage()) : null);

  return (
    <div className="pagination">
      <button onClick={pageMinus}>
        <BsArrowLeftShort size={20} />
      </button>
      <h3>{page}</h3>
      <button onClick={pagePlus}>
        <BsArrowRightShort size={20} />
      </button>
    </div>
  );
}
