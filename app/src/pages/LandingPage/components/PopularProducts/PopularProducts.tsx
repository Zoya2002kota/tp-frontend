import './PopularProducts.scss'
import { ProductCard } from '../../../../components'
import { Swiper } from './components/Swiper/Swiper'
import { useEffect, useState } from 'react';

interface Tattoos {
    id: number,
    name: string,
    description: string,
    price: number,
    image_url: string,
    artist_id: number,
    created_at: string,
    updated_at: string
}

export const PopularProducts = () => {
    const [tattoos, setTattos] = useState<Tattoos[]>([]);


    const getTattoos = async () => {
        const data = await fetch('http://localhost:3005/tattoos')
        .then(res => res.json())
        .catch(error => console.error(error))
        return data;
    }

    // useEffect(() => {}, []);
    
    useEffect(() => {
        getTattoos().then((data) => setTattos(data));
    }, [])
    

    return (
        <section className='popular-products padding--width'>
            <h1 className='popular-products__title'>Популярное</h1>
            <Swiper name="hello">
                {
                    tattoos.map((tattoo) => 
                        <ProductCard name={tattoo.name} price={tattoo.price} image_url={tattoo.image_url}/>
                    )
                }
            </Swiper>
        </section>
    )
}