import './CatalogSection.scss';
import { CatalogTitle, CatalogSwiper, SideFilter } from './components';
import { ProductCard } from '../../../../components';
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

export const CatalogSection = () => {

    const [tattoos, setTattos] = useState<Tattoos[]>([]);


    const getTattoos = async () => {
        const data = await fetch('http://localhost:3005/tattoos')
        .then(res => res.json())
        .catch(error => console.error(error))
        return data;
    }
    
    useEffect(() => {
        getTattoos().then((data) => setTattos(data));
    }, [])

    return (
        <section className='catalog-section padding--width'>
            <CatalogTitle/>
            <SideFilter/>
            <CatalogSwiper>
                {
                    tattoos.map((tattoo) => 
                        <ProductCard name={tattoo.name} price={tattoo.price} image_url={tattoo.image_url}/>
                    )
                }       
            </CatalogSwiper>
        </section>
    )
}
