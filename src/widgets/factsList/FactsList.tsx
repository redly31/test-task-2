import { useGetFactsQuery } from "../../entities/fact/api/factsApi"
import { Fact } from "../../entities/fact/model/fact"
import { CatFactsResponse } from "../../entities/fact/model/factsResponse";
import Loader from "../../widgets/loader/Loader";
import './ui/factslist.css'

export default function FactsList() {
  const { data, isLoading } = useGetFactsQuery(1) as {
    data: CatFactsResponse;
    isLoading: boolean;
  };
  if (isLoading) {
    return <Loader />;
  }

  const facts: Fact[] = data.data;
  console.log(facts);

  return (
    <div className="facts__list">
        {facts.map((fact, index) =>
            <div key={fact.fact} className="fact">
                <h2 className="fact__title">{index + 1}. {fact.fact}</h2>
            </div>
        )}
    </div>
  )
}
