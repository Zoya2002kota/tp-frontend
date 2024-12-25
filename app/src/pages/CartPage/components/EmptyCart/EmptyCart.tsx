import './EmptyCart.scss';
import {empty_cart} from '../../../../assets/png/cart_for_empty_cart.png';

export const EmptyCart = () => {
    return (
        <section className='empty-cart-section'>
            <img src={empty_cart}/>
            <p>В Вашей корзине пока пусто :(</p>
        </section>
    )
}