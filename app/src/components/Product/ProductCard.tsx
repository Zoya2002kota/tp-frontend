import './ProductCard.scss'
import cart_image from '../../../assets/png/cart.png'

export const ProductCard = () => {
    return (
        <div className='productCard padding--width'>
            <img className='productCard__product-img'></img>
            <h2 className='productCard__title'>Название</h2>
            <h4 className='productCard__price'>549 руб.</h4>
            <div className='productCard__add-to-cart'>
                <img className='productCard__cart-img' src={cart_image} alt='cart'/>
                <p>В корзину</p>
            </div>
        </div>
    )
}