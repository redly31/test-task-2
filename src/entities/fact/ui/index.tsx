import { type Fact } from "../model/fact";

export function FactItem(fact: Fact) {
  return (
    <div className="fact">
        <h2 className="fact__title">
            {fact.fact}
        </h2>
    </div>
  )
}
