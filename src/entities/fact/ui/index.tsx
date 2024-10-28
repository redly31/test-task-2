import { IFact } from "../model/fact";

export function Fact(fact: IFact) {
  return (
    <div className="fact">
        <h2 className="fact__title">
            {fact.fact}
        </h2>
    </div>
  )
}
