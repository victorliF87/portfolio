import React from "react";
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Section, SectionDivider, SectionText, SectionTitle, ProjectText } from '../styles/GlobalComponents';


export default function undergraduateUX(){
    return(
        <div>
            <Header/>
            <Section>
                <SectionTitle> Undergraduate Research Website Project</SectionTitle>
            </Section>
            <center>
                <img src='/images/UGRUX1.jpg' style={{width: '60%', height:'60%'}}/>
            </center>
            <Section>
                <ProjectText>
                    Currently, one way to be involved in undergraduate research at UC Santa Cruz is to use 
                    the UCSC undergraduate research website; the website, however, is outdated and not user-centered.   
                </ProjectText>
                <ProjectText>
                    Specifically, we wanted to understand the relationship between particular design choices and the kinds of 
                    social interactions they promote.
                </ProjectText>
            </Section>
            <center>
                <img src ='/images/UGRUX5.jpg' style={{width: '60%', height:'60%'}}/>
            </center>
            
            <Section>
            <ProjectText>
                     We produced interactive lo-fi and 
                     high fidelity prototypes and analyzed data through focus groups and heuristics evaluation 
                </ProjectText>
            </Section>
            <center>
                <img src ='/images/UGRUX3.jpg' style={{width: '60%', height:'60%'}}/>
            </center>
            
            <Section>
            <ProjectText>
                     our report on the design impressively showed 
                     its strong User-centered focus that it was succesffuly considered by the 
                     UCSC ITS department for the official website.  
                </ProjectText>
            </Section>

             <Section>
            <ProjectText>
                     Original Design of the UCSC Undergraduate Research Website 
                </ProjectText>
            </Section>
            <center>
                <img src ='/images/UGRUX4.jpg' style={{width: '60%', height:'60%'}}/>
                <img src ='/images/UGRUX6.jpg' style={{width: '60%', height:'60%'}}/>
            </center>
            <Footer/>
        </div>
    )
}





