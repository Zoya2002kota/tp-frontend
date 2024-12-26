import './Swiper.scss';
import React from 'react';

interface Props {
    children?: React.ReactNode;
}

export const Swiper : React.FC<Props> = ({children}) => {
    return (
        <div className='swiper padding--width'>
            {children}
        </div>
    )
}