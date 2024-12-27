import './CartCard.scss';
import trash_image from '../../../../../../assets/png/trash.png';
import { useState } from 'react';
import type { ITattoo } from '../../../../../../models';

interface Props {
	tattoo: ITattoo;
}

export const CartCard = ({ tattoo }: Props) => {
	const [quantity, setQuantity] = useState(1);

	const handleAdd = () => {
		setQuantity(quantity + 1);
	};

	const handleSub = () => {
		setQuantity(quantity - 1);
	};

	return (
		<div className="cart-card padding--width">
			<img className="cart-card__product-img" src={tattoo.image_url} />
			<h2 className="cart-card__title">{tattoo.name}</h2>
			<h4 className="cart-card__price">{tattoo.price} руб.</h4>
			<div className="cart-card__counter">
				<button
					className="cart-card__sub-button"
					onClick={handleSub}
					disabled={quantity <= 1}
				>
					-
				</button>
				<p className="cart-card__quantity">{quantity}</p>
				<button className="cart-card__add-button" onClick={handleAdd}>
					+
				</button>
			</div>
			<button>
				<img className="cart-card__trash-img" src={trash_image} alt="trash" />
			</button>
		</div>
	);
};
