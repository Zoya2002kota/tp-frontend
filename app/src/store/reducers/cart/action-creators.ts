import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ICartItem, ICartWithTattoo, ITattoo } from '../../../models';
import { getTattoosApi } from '../../../api/tattoo/get-tattoos.ts';
import { getCartByUserId } from '../../../api/cart';
import axios from 'axios';

export const fetchCart = createAsyncThunk<
	ICartWithTattoo[],
	number,
	{ rejectValue: string }
>('cart/fetchCart', async (userId, thunkAPI) => {
	try {
		const [cartResponse, tattoosResponse] = await Promise.all([
			getCartByUserId(userId),
			getTattoosApi(),
		]);

		if (cartResponse.statusText !== 'OK' || tattoosResponse.statusText !== 'OK') {
			throw new Error('Ошибка загрузки данных');
		}

		const cart: ICartItem[] = cartResponse.data;
		const tattoos: ITattoo[] = tattoosResponse.data;

		const combined: ICartWithTattoo[] = cart.map((cartItem) => ({
			...cartItem,
			tattoo: tattoos.find((tattoo) => tattoo.id === cartItem.tattoo_id)!,
		}));

		return combined;
	} catch (error) {
		if (axios.isAxiosError(error) && error.message) {
			return thunkAPI.rejectWithValue(error.message);
		}
		return thunkAPI.rejectWithValue('Неизвестная ошибка при загрузке todos');
	}
});
