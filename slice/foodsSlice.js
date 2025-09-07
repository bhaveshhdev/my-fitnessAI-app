import { createSlice } from '@reduxjs/toolkit';
import data from '../assets/fooddata/nutrition.json';

const foodsSlice = createSlice({
    name: 'foods',
    initialState: {
        all: data,
        filtered: data,
    },
    reducers: {
        searchFoods: (state, action) => {
            const query = action.payload.toLowerCase();
            state.filtered = state.all.filter(item =>
                item.name.toLowerCase().includes(query)
            );
        },
    },
});

export const { searchFoods } = foodsSlice.actions;
export default foodsSlice.reducer;
