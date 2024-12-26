import './CartCard.scss';
import trash_image from '../../../../../../assets/png/trash.png';
import { useState } from 'react';

interface Props {
    name: string,
    price: number,
    image_url: string
}

export const CartCard = ({name, price, image_url} : Props) => {
    const [quantity, setQuantity] = useState(1);

    const handleAdd = () => {
        setQuantity(quantity + 1);
        // setQuantity(prev => prev + 1);
    }

    const handleSub = () => {
        setQuantity(quantity - 1);
    }

    return (
        <div className='cart-card'>
            <img className='cart-card__product-img' src={image_url}/>
            <h2 className='cart-card__title'>{name}</h2>
            <h4 className='cart-card__price'>{price} руб.</h4>
            <div className='cart-card__counter'>
                <button className='cart-card__sub-button' onClick={handleSub} disabled={quantity <= 1}>-</button>
                <p className='cart-card__quantity'>{quantity}</p>
                <button className='cart-card__add-button' onClick={handleAdd}>+</button>
            </div>
            <button><img className='cart-card__trash-img' src={trash_image} alt='trash'/></button>
        </div>
    )
}