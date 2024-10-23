import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BreedsPagination } from "../model/breedsPagination";

const breedsPaginationSlice = createSlice({
    name: 'pagination',
    initialState: {
        limit: 10,
        page: 1,
    } as BreedsPagination,
    reducers: {
        changeLimit(state, action: PayloadAction<number>) {
            state.limit = action.payload
            state.page = 1
        },
        nextPage(state) {
            state.page = state.page + 1
        },
        prevPage(state) {
            state.page = state.page - 1
        },
    }
})

export const { changeLimit, nextPage, prevPage } = breedsPaginationSlice.actions
export default breedsPaginationSlice.reducer