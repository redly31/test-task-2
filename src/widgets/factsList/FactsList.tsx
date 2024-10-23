import { useAppSelector } from "../../app/store";
import { useGetFactsQuery } from "../../entities/fact/api/factsApi";
import { Fact } from "../../entities/fact/model/fact";
import { CatFactsResponse } from "../../entities/fact/model/factsResponse";
import Loader from "../../widgets/loader/Loader";
import "./ui/factslist.css";

export default function FactsList() {
  const page = useAppSelector(state => state.factsPagination.page)
  const limit = useAppSelector(state => state.factsPagination.limit)
  const {
    data,
    isLoading,
    isError,
  } = useGetFactsQuery({limit: limit, page: page}) as {
    data: CatFactsResponse;
    isLoading: boolean;
    isError: boolean;
  };
  const facts: Fact[] | undefined = data?.data;

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <h2 className="mt-5">Ошибка. Не удалось получить данные</h2>;
  }

  return (
    <div className="facts__list">
      {facts.map((fact: Fact) => (
        <div key={Math.random()} className="fact">
          <h2 className="fact__title">
            {fact.fact}
          </h2>
        </div>
      ))}
    </div>
  );
}
