import './ProductCard.scss'
import cart_image from '../../assets/png/cart.png'

interface Props {
    name: string,
    price: number,
    image_url : string
}

export const ProductCard = ({name, price, image_url} : Props) => {
    return (
        <div className='product-card'>
            <img className='product-card__product-img' src={image_url}/>
            <h2 className='product-card__title'>{name}</h2>
            <h4 className='product-card__price'>{price} руб.</h4>
            <div className='product-card__add-to-cart'>
                <p className='product-card__note-to-cart'>В корзину</p>
                <img className='product-card__cart-img' src={cart_image} alt='cart'/>
            </div>
        </div>
    )
}