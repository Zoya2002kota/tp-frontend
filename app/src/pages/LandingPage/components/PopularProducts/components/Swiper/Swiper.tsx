import './Swiper.scss';
import React from 'react';

interface Props {
    children?: React.ReactNode;
    name: string;
}

export const Swiper : React.FC<Props> = ({children}) => {
    return (
        <div className='swiper'>
            {children}
        </div>
    )
}