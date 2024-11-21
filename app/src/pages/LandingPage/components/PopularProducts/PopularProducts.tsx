import './PopularProducts.scss'
import { ProductCard } from '../../../../components/ProductCard/ProductCard'

const arr:string[] = ['a', 'b', 'c']

export const PopularProducts = () => {
    return (
        <section className='popularProducts padding--width'>
            {
                arr.map((arrValue, arrIndex) => {
                    return(
                    <p key={arrIndex}>{arrValue}</p>
                )
                })
            }

            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </section>
    )
}