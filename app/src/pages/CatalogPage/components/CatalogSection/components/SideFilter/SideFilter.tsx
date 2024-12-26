import './SideFilter.scss';

export const SideFilter = () => {
    return (
        <section className='side-filter'>
            <h3> Фильтр </h3>
            <button className='side-filter__price'> цена </button>
            <button> автор </button>
            <button> рейтинг </button>
        </section>
    )
}