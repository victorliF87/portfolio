import React, { useCallback } from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        <br /> 
        Jialang Victor Li 
      </SectionTitle>
      <SectionText>
      Multi-disciplinary HCI Masters student specializing in HCI Research, UX
      and visual design for web and mobile applications.
      </SectionText>
      <Button onClick = {() => window.location = '/aboutme'}  >Learn More</Button>
    </LeftSection>
    
  </Section>
);

export default Hero;


