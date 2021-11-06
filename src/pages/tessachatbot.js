import React from "react";
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import VRMethods from '../components/VRMethods/VRMethods';
import { Section, SectionDivider, SectionText, SectionTitle, ProjectText } from '../styles/GlobalComponents';


export default function tessachatbot(){
    return(
        <div>
            <Header/>
            <Section>
                <SectionTitle>Mozilla Hubs Social VR Project</SectionTitle>
            </Section>
            <center>
                <img src='/images/tessachatbot1.jpg' style={{width: '35%', height:'35%'}}/>
            </center>
            <Section>
                <ProjectText>
                    
                </ProjectText>
                <ProjectText>
                    This project we used mentalh healthy diagnositc survey, PHQ_9(Depression) and GAD-7 (Anxiety) to validate and analyze 
                    conversational agents (AI Chatbots)'s advice. We evaluated the responses of two text-based cahtbots and four voice assitants.
                    These conversation agents included: Wysa, Woebot, Innerhour, Replika, Alexa, Siri, Cortana and Google Assistant
                </ProjectText>
            </Section>
            <center>
                <img src ='/images/TessaChatbot2.jpg' style={{width: '35%', height:'35%'}}/>
            </center>
            <Section>
            <ProjectText>
                    Design implications were improved responses through more clarified sub-dialogues. Responses from
                    voice-based chatbots like Alexa or Siri can be improved with incoporation of empathy. Future researchers
                    should utilize NLP methods to generate authromatic dialogues with multiple paraphrases of the symptom. 
                </ProjectText>
            </Section>
            <Footer/>
        </div>
    )
}

