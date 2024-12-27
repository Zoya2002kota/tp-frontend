import './PopularProducts.scss';
import { ProductCard } from '../../../../components';
import { Swiper } from './components';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { fetchTattoos } from '../../../../store/reducers';

export const PopularProducts = () => {
	const dispatch = useAppDispatch();
	const {
		tattoos,
		isLoading: isTatooLoading,
		error: tottooError,
	} = useAppSelector((state) => state.tattooReducer);

	useEffect(() => {
		dispatch(fetchTattoos());
		console.log('fetched');
	}, []);

	return (
		<section className="popular-products padding--width">
			<h1 className="popular-products__title">Популярное</h1>
			{tottooError ? (
				<h1>{tottooError}</h1>
			) : isTatooLoading ? (
				<h1>LOADING...</h1>
			) : (
				<Swiper>
					{tattoos &&
						tattoos.map((tattoo) => <ProductCard key={tattoo.id} tattoo={tattoo} />)}
				</Swiper>
			)}
		</section>
	);
};
