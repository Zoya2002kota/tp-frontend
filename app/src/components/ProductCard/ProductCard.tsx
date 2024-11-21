import './ProductCard.scss'
import cart_image from '../../assets/png/cart.png'

export const ProductCard = () => {
    return (
        <div className='product-card'>
            <img className='product-card__product-img'/>
            <h2 className='product-card__title'>Название</h2>
            <h4 className='product-card__price'>549 руб.</h4>
            <div className='product-card__add-to-cart'>
                <p className='product-card__note-to-cart'>В корзину</p>
                <img className='product-card__cart-img' src={cart_image} alt='cart'/>
            </div>
        </div>
    )
}