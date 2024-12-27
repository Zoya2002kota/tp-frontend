import './CartSection.scss';
import { CartSwiper, CartCard, OrderBlock } from './components';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { fetchCart } from '../../../../store/reducers/cart';

export const CartSection = () => {
	const dispatch = useAppDispatch();

	const {
		items,
		error: cartError,
		isLoading: isCartLoading,
	} = useAppSelector((state) => state.cartReducer);

	useEffect(() => {
		dispatch(fetchCart(1));
	}, []);

	return (
		<section className="cart-section padding--width">
			<div className="cart-section__swiper">
				{cartError ? (
					<h1>{cartError}</h1>
				) : isCartLoading ? (
					<h1>LOADING...</h1>
				) : (
					<CartSwiper>
						{items &&
							items.map((item) => <CartCard key={item.tattoo.id} tattoo={item.tattoo} />)}
					</CartSwiper>
				)}
			</div>
			<OrderBlock />
		</section>
	);
};
