import './CartSwiper.scss';
import React from 'react';

interface Props {
    children?: React.ReactNode;
}

export const CartSwiper : React.FC<Props> = ({children}) => {
    return (
        <div className='cart-swiper'>
            {children}
        </div>
    )
}