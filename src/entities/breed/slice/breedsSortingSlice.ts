import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Breed } from "../model/breed";

interface BreedsState {
    sortedBreeds: Breed[];
}

const initialState: BreedsState = {
    sortedBreeds: []
};

const breedsSortingSlice = createSlice({
    name: 'sortedBreeds',
    initialState,
    reducers: {
        sortBy(state, action: PayloadAction<{sortType: keyof Breed, breeds: Breed[]}>) {
            const { sortType, breeds } = action.payload;
            if (breeds) {
                state.sortedBreeds = [...breeds].sort((a, b) =>
                    (a[sortType] as string).localeCompare(b[sortType] as string)
                );
            }
        },
    }
})

export const { sortBy } = breedsSortingSlice.actions
export default breedsSortingSlice.reducer