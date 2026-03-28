import { useState } from 'react';
import { accordionData } from './data';
import AccordionItem from './AccordionItem';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onItemClick = (clickedIndex) => {
    setActiveIndex((prev) => (prev === clickedIndex ? null : clickedIndex));
  };

  return (
    <div>
      <h2>Accordion</h2>

      {accordionData.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <AccordionItem
            key={index}
            index={index}
            title={item.title}
            content={item.content}
            isOpen={isOpen}
            onItemClick={onItemClick}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
