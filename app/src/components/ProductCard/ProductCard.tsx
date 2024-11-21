import './ProductCard.scss'
import cart_image from '../../assets/png/cart.png'

export const ProductCard = () => {
    return (
        <div className='productCard'>
            <img className='productCard__product-img'/>
            <h2 className='productCard__title'>Название</h2>
            <h4 className='productCard__price'>549 руб.</h4>
            <div className='productCard__add-to-cart'>
                <p className='productCard__note-to-cart'>В корзину</p>
                <img className='productCard__cart-img' src={cart_image} alt='cart'/>
            </div>
        </div>
    )
}