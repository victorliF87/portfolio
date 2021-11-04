import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle> Technologies</SectionTitle>
    <SectionText>
      "I have worked with both front end and back end team in HCI/UX research as well as product building. "
    </SectionText>
    <List>
       <listItem>
         <DiReact size ="3rem" />
         <ListContainer>Research</ListContainer>
         <ListParagraph>
           Experience with <br />
            Rsearchs skills like User research design, recruiting, usability testing etc
         </ListParagraph>
       </listItem>
       <listItem>
         <DiFirebase size ="3rem" />
         <ListContainer>UI/UX</ListContainer>
         <ListParagraph>
           Experience with <br />
            Tools like Figma and Adobe Illustrator 
         </ListParagraph>
       </listItem>
       <listItem>
         <DiZend size ="3rem" />
         <ListContainer>Back-end</ListContainer>
         <ListParagraph>
           Experience with <br />
            React.JS and MatLab 
         </ListParagraph>
       </listItem>
    </List>
  </Section>
);

export default Technologies;
