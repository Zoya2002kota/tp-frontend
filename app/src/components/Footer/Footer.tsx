import './Footer.scss';

export const Footer = () => {

    return (
        <footer className="footer padding--width">
            <div className="footer__left-div"> 
                <p><a href="" className='footer__phone'></a>8 900 900 90 90</p>
                <p><a href="" className='footer__email'></a>pochta@gmail.com</p>
            </div>
            <div className="footer__right-div"> 
                <p>МЫ В СОЦИАЛЬНЫХ СЕТЯХ</p>
                <ul className='footer__list'>
                    <li><a href="" className='footer__vk-link'></a>vk</li>
                    <li><a href="" className='footer__tg-link'></a>tg</li>
                </ul>
            </div>
        </footer>
    )
}