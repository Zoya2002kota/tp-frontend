import { api } from '../index.ts';

export const getCart = async () => {
	return await api.get(`/cart`);
};

export const getCartByUserId = async (userId: number) => {
	return await api.get(`/cart?user_id=${userId}`);
};
