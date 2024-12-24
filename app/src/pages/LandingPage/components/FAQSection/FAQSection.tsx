import './FAQSection.scss';

export const FAQSection = () => {
	interface Accordion {
		title: string;
		description: string;
	}

	const accordionArray: Accordion[] = [
		{ title: 'Section 1', description: 'Lorem ipsum...' },
		{ title: 'Section 2', description: 'brat...' },
		{ title: 'Section 3', description: 'geg...' },
    { title: 'Section 4', description: 'geg...' },
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
              <button className="faq__accordion" onClick={(event) => handleAccordion(event.target)}>{item.title}</button>
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
