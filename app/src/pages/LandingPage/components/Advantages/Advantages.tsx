import './Advantages.scss';

export const Advantages = () => {
    return (
        <section className='advantages padding--width'>
            <div className='advantages__info'>
                <h1 className='advantages__title'>Преимущества наших татуировок</h1>
                <p className='advantages__description'>description text</p>
            </div>
            <ul className='advantages__list'>
                <li className='advantages__item'>
                    <p><img></img>Чернила из растительного экстракта</p>
                </li>
                <li className='advantages__item'>
                    <p><img></img>Окрашивают кожу, а не просто наклеиваются</p>
                </li>
                <li className='advantages__item'>
                    <p><img></img>Наносятся без иголок и похода в салон</p>
                </li>
            </ul>
        </section>
    )
}