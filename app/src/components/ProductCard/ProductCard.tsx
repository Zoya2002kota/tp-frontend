import './ProductCard.scss';
import cart_image from '../../assets/png/cart.png';
import type { ITattoo } from '../../models';

interface Props {
	tattoo: ITattoo;
}

const handleAddToCart = () => {};

export const ProductCard = ({ tattoo }: Props) => {
	return (
		<div className="product-card">
			<img className="product-card__product-img" src={tattoo.image_url} />
			<h2 className="product-card__title">{tattoo.name}</h2>
			<h4 className="product-card__price">{tattoo.price} руб.</h4>
			<button className="product-card__add-to-cart" onClick={handleAddToCart}>
				<p className="product-card__note-to-cart">В корзину</p>
				<img className="product-card__cart-img" src={cart_image} alt="cart" />
			</button>
		</div>
	);
};
