import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ITattoo } from '../../../models';
import { fetchTattoos } from './action-creators.ts';

interface TattooState {
	tattoos: ITattoo[];
	isLoading: boolean;
	error: string;
}

const initialState: TattooState = {
	tattoos: [],
	isLoading: false,
	error: '',
};

const tattooSlice = createSlice({
	name: 'tattoos',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		//fetchTattoos
		builder
			.addCase(fetchTattoos.pending, (state) => {
				state.isLoading = true;
				state.error = '';
			})
			.addCase(fetchTattoos.fulfilled, (state, action: PayloadAction<ITattoo[]>) => {
				state.tattoos = action.payload;
				state.isLoading = false;
				state.error = '';
			})
			.addCase(fetchTattoos.rejected, (state, action) => {
				state.isLoading = true;
				state.error = action.payload || 'Не удалось загрузить tattoos';
			});
	},
});

export default tattooSlice.reducer;
