import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen

  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <center>
        <img src='/images/ProfilePic.jpg' style={{width: '30%', height:'30%'}}/>
      </center>
      <Section id= "about">
        <SectionTitle>About Me</SectionTitle>
        <SectionText>
          Nice to meet you, my name is Victor (Jialang). I first stumbled upon UX when 
          I took a class in human-centered design with Dr. Leila Takyama and worked for her Robotics Interaction lab.
          And ever since then I've been chasing my passion at the intersection of design, business and technology. 
        </SectionText>
        
        <SectionText>
          My background in Intensive Psychology and Cognitive Science allows me view design and research from an interdisciplinary 
          lens. This helps me build and research products that are intuitive and intentional, with users at the forefront.
          I am in the process of completing my Masters in Human Computer Interaction at UC Santa Cruz and I'm looking
          forward to new opporunities in the product design industry. 
        </SectionText>
        <CarouselContainer ref ={carouselRef} onScroll ={handleScroll}>
            <>
              {TimeLineData.map((item, index) => (
                <CarouselMobileScrollNode key={index} final ={index === TOTAL_CAROUSEL_COUNT - 1}>
                  <CarouselItem
                  index = {index}
                  id = {`carousel_item-${index}`}
                  active = {activeItem}
                  onClick={(e) => handleClick(e,index)}
                  >
                  <CarouselItemTitle>
                    {item.year}

                  </CarouselItemTitle>
                  <CarouselItemText>{item.text}</CarouselItemText>
                  </CarouselItem>
                </CarouselMobileScrollNode>
              ))}
            </>
        </CarouselContainer>
        <CarouselButtons>
          {TimeLineData .map ((item, index) => (
            <CarouselButton
              key ={index}
              index= {index}
              active = {activeItem}
              onClick={(e) => handleClick (e, index)}

            >
              <CarouselButtonDot active={activeItem} />
              </CarouselButton>
          ))}
        </CarouselButtons>

      <SectionDivider />
      </Section>
     </div>
  );
};

export default Timeline;
