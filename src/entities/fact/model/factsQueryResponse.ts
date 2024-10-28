import { FactsResponse } from "./factsResponse";

export type FactsQueryResponse = {
    data: FactsResponse;
    isLoading: boolean;
    isError: boolean;
}