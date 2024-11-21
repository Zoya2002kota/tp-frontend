import './Header.scss';

export const Header = () => {

    return (
        <header className="header padding--width">
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item"><a href="" className="header__link">КАТАЛОГ</a></li>
                    <li className="header__item"><a href="" className="header__link">ГЛАВНАЯ</a></li>
                    <li className="header__item"><a href="" className="header__link">КАК НАНЕСТИ</a></li>
                    <li className="header__item"><a href="" className="header__link">ОПЛАТА И ДОСТАВКА</a></li>
                    <li className="header__item"><a href="" className="header__link">КОНТАКТЫ</a></li>
                </ul>
                <div className='header__cart'>
                    <a href="/" className="header__link">
                        <p className='header__title'>Корзина</p>
                        <p className='header__description'>1000 руб.</p>
                    </a>
                </div>
            </nav>
        </header>
    )
}
