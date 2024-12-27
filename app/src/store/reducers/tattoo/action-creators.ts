import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ITattoo } from '../../../models';
import { getTattoosApi } from '../../../api/tattoo/get-tattoos.ts';
import axios from 'axios';

export const fetchTattoos = createAsyncThunk<ITattoo[], void, { rejectValue: string }>(
	'tattoos/fetchTattoos',
	async (_, thunkAPI) => {
		try {
			const response = await getTattoosApi();
			return response.data;
		} catch (error) {
			if (axios.isAxiosError(error) && error.message) {
				return thunkAPI.rejectWithValue(error.message);
			}
			return thunkAPI.rejectWithValue('Неизвестная ошибка при загрузке todos');
		}
	},
);
