import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ICartWithTattoo } from '../../../models';
import { fetchCart } from './action-creators.ts';

interface CartState {
	items: ICartWithTattoo[];
	isLoading: boolean;
	error: string;
}

const initialState: CartState = {
	items: [],
	isLoading: false,
	error: '',
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// fetchCart
		builder
			.addCase(fetchCart.pending, (state) => {
				state.isLoading = true;
				state.error = '';
			})
			.addCase(fetchCart.fulfilled, (state, action: PayloadAction<ICartWithTattoo[]>) => {
				state.items = action.payload;
				state.isLoading = false;
			})
			.addCase(fetchCart.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload || 'Не удалось загрузить корзину';
			});
	},
});

export default cartSlice.reducer;
