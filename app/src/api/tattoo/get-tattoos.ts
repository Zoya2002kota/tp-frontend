import { api } from '../index.ts';
import type { ITattoo } from '../../models';

export const getTattoosApi = async () => {
	return await api.get<ITattoo[]>('/tattoos');
};
