import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FactsPagination } from "../model/factsPagination";

const factsPaginationSlice = createSlice({
    name: 'factsPagination',
    initialState: {
        limit: 10,
        page: 1,
    } as FactsPagination,
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

export const { changeLimit, nextPage, prevPage } = factsPaginationSlice.actions
export default factsPaginationSlice.reducer