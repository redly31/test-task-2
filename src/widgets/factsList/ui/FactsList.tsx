import { Loader } from "@shared/loader";
import "./factslist.css";
import { Fact } from "@entities/fact";
import { useGetFactsQuery } from "@entities/fact/api/factsApi";
import { IFact } from "@entities/fact/model/fact";
import { FactsResponse } from "@entities/fact/model/factsResponse";
import { useAppSelector } from "@shared/hooks/redux";

export function FactsList() {
  const page = useAppSelector(state => state.factsPagination.page)
  const limit = useAppSelector(state => state.factsPagination.limit)
  const {
    data,
    isLoading,
    isError,
  } = useGetFactsQuery({limit: limit, page: page}) as {
    data: FactsResponse;
    isLoading: boolean;
    isError: boolean;
  };
  const facts: IFact[] | undefined = data?.data;

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <h2 className="mt-5">Ошибка. Не удалось получить данные</h2>;
  }

  return (
    <div className="facts__list">
      {facts.map((fact: IFact) => (
        <Fact key={Math.random()} {...fact}/>
      ))}
    </div>
  );
}
