import React from "react";
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import VRMethods from '../components/VRMethods/VRMethods';
import { Section, SectionDivider, SectionText, SectionTitle, ProjectText } from '../styles/GlobalComponents';


export default function SocialVR(){
    return(
        <div>
            <Header/>
            <Section>
                <SectionTitle>Mozilla Hubs Social VR Project</SectionTitle>
            </Section>
            <center>
                <img src='/images/SocialVR.jpeg' style={{width: '50%', height:'50%'}}/>
            </center>
            <Section>
                <ProjectText>
                    Our life has been over run by virtualy meeting in Zoom everyday. This project aims to
                    bring balance back into meetings. We provided an environment where people are more aware of their
                    conversation balance. 
                </ProjectText>
                <ProjectText>
                    Specifically, we wanted to understand the relationship between particular design choices and the kinds of 
                    social interactions they promote.
                </ProjectText>
            </Section>
            <center>
                <img src ='/images/SocialVR2.jpg' style={{width: '50%', height:'50%'}}/>
            </center>
            <Section>
            <ProjectText>
               My role in this project involved UX design on Unity and Mozilla Hubs. I also lead
               many stages of user testing before the deployment of the research environment. I also succesfully trained 4 undergraduate 
               research assistants to independently do A/B testing and interview. 
                    
            </ProjectText>
            <ProjectText>
               The publication is a CHI 2021 Workshop Position paper that explained the recruiting methods and challenges
               we face during our research under the pandemic. 
               Our research is currently on going and we expect to be published at CHI 2023 and present in-person at 
               CHI 2022 at the Interactivity demonstration.  
            </ProjectText>
            </Section>
            <Section>
            <ul style= {{listStyleType:"circle"}}>
                    <li>Evidenced Based Design</li>
                    <li> A/B Testing </li> 
                    <li>Focus Groups</li>
                    <li>Rapid Prototype</li>
                    <li>CSS </li>
                    <li>Mozilla Hubs </li>
                    <li>Unity </li>
                </ul>
            </Section>
            <Footer/>
        </div>
    )
}

