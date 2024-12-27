import type { ITattoo } from './tattoo.ts';

export interface ICartItem {
	id: number;
	userId: number;
	tattoo_id: number;
	quantity: number;
	addedAt: string;
}

export interface ICartWithTattoo extends ICartItem {
	tattoo: ITattoo;
}
