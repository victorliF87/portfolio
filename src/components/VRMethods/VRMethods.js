import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './VRMethods1';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle> Technologies</SectionTitle>
    <SectionText>
      "Description of your experience with technologies in UX Design"
    </SectionText>
    <List>
       <listItem>
         <DiReact size ="3rem" />
         <ListContainer>Research</ListContainer>
         <ListParagraph>
           Experience with <br />
            React.js
         </ListParagraph>
       </listItem>
       <listItem>
         <DiFirebase size ="3rem" />
         <ListContainer>Research</ListContainer>
         <ListParagraph>
           Experience with <br />
            User research design, recruiting, usability testing
         </ListParagraph>
       </listItem>
       <listItem>
         <DiZend size ="3rem" />
         <ListContainer>UI/UX</ListContainer>
         <ListParagraph>
           Experience with <br />
            Figma and Adobe Illustrator
         </ListParagraph>
       </listItem>
    </List>

  

  </Section>
);

export default Technologies;
