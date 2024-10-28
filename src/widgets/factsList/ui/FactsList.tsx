import { Loader } from "@shared/loader";
import "./factslist.css";
import { FactItem } from "@entities/fact";
import { useGetFactsQuery } from "@entities/fact/api/factsApi";
import { Fact } from "@entities/fact/model/fact";
import { CatFactsResponse } from "@entities/fact/model/factsResponse";
import { useAppSelector } from "@shared/hooks/redux";

export function FactsList() {
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
        <FactItem key={Math.random()} {...fact}/>
      ))}
    </div>
  );
}
