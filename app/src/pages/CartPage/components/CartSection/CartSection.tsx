import './CartSection.scss';
import { CartSwiper, CartCard, OrderBlock } from './components';
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

export const CartSection = () => {
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
        <section className='cart-section padding--width'>
            <div className='cart-section__swiper'>
                <CartSwiper>
                    {
                        tattoos.map((tattoo) => 
                            <CartCard name={tattoo.name} price={tattoo.price} image_url={tattoo.image_url}/>
                        )
                    }
                </CartSwiper>
            </div>
            <OrderBlock/>
        </section>
    )
}