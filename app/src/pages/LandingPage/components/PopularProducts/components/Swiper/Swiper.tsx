import './Swiper.scss';
import React from 'react';

interface Props {
    children?: React.ReactNode;
    name: string;
}

export const Swiper : React.FC<Props> = ({children, name}) => {
    return (
        <div className='swiper'>
            <p>{name}</p>
            {children}
        </div>
    )
}