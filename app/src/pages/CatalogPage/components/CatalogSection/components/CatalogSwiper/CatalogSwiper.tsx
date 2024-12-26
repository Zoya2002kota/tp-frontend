import './CatalogSwiper.scss';
import React from 'react';

interface Props {
    children?: React.ReactNode;
}

export const CatalogSwiper : React.FC<Props> = ({children}) => {
    return (
        <div className='catalog-swiper'>
            {children}
        </div>
    )
}