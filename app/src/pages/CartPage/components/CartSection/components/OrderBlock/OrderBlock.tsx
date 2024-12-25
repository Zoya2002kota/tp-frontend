import './OrderBlock.scss'

export const OrderBlock = () => {
    return (
        <div className='order-block'>
            <p className='order-block__sum'>
                <p>ИТОГО:</p>
                <p>1000 руб.</p>
            </p>
            <button className='order-block__submit-button'>
                ЗАКАЗАТЬ
            </button>
        </div>

    )
}