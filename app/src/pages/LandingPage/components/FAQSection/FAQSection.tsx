import './FAQSection.scss';
import plus_image from '../../../../assets/png/plus.png';

export const FAQSection = () => {
	interface Accordion {
		title: string;
		description: string;
	}

	const accordionArray: Accordion[] = [
		{ title: 'В какие города есть доставка?', description: 'Доставка осуществляется в Москву, Санкт-Петербург, Казань, Калининград' },
		{ title: 'Татуировки безопасны?', description: 'Татуировки сделаны из растительных материалов, поэтому совершенно безопасны. Никаких игл и повреждений кожи' },
		{ title: 'Я сделал заказ, как его отследить?', description: 'Так как доставка производится Почтой России, то отследить посылку можно на их сайте по трек-номеру' },
    { title: 'Как работают татуировки?', description: 'Татуировки окрашивают роговой слой кожи' },
	];

  const handleAccordion = (target) => {
    target.classList.toggle('faq__active')
    if (target.nextElementSibling.style.display === 'block') {
      target.nextElementSibling.style.display = 'none'
    } else {
      target.nextElementSibling.style.display = 'block'
    }
  }

	return (
      <section className='faq padding--width'>
        <h2 className='faq__title'>FAQ</h2>
      {
        accordionArray.map( (item, index) => {
          return (
            <div key={index}> 
              <button className="faq__accordion" onClick={(event) => handleAccordion(event.target)}>{item.title} 
                {/* <img className='faq__plus-img' src={plus_image}/> */}
              </button>
              <div className="faq__panel">
                <p>{item.description}</p>
              </div>
            </div>
          )
        })
      }
      </section>
	);
};
