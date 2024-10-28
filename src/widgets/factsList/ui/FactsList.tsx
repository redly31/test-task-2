import { Loader } from "@shared/ui/loader";
import "./factslist.css";
import { Fact } from "@entities/fact";
import { useGetFactsQuery } from "@entities/fact/api/factsApi";
import { IFact } from "@entities/fact/model/fact";
import { useAppSelector } from "@shared/hooks/redux";
import { FactsQueryResponse } from "@entities/fact/model/factsQueryResponse";

export function FactsList() {
  const page = useAppSelector((state) => state.factsPagination.page);
  const limit = useAppSelector((state) => state.factsPagination.limit);
  const queryArgs = { limit: limit, page: page }
  const { data, isLoading, isError } = useGetFactsQuery(queryArgs) as FactsQueryResponse
  const facts: IFact[] | undefined = data?.data;

  if(isLoading) return <Loader/>
  if(isError) return <h1>Error! Data could not be retrieved</h1>

  return (
    <div className="facts__list">
      {facts?.map((fact: IFact) => (
        <Fact key={Math.random()} {...fact} />
      ))}
    </div>
  );
}
