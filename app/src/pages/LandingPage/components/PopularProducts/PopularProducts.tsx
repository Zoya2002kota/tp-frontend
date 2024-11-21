import './PopularProducts.scss'
import { ProductCard } from '../../../../components'
import { Swiper } from './components/Swiper/Swiper'

export const PopularProducts = () => {
    return (
        <section className='popular-products padding--width'>
            <h1 className='popular-products__title'>Популярное</h1>
            <Swiper name="hello">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </Swiper>
        </section>
    )
}