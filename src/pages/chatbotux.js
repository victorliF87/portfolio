import React from "react";
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Section, SectionDivider, SectionText, SectionTitle, ProjectText } from '../styles/GlobalComponents';


export default function AnimatedChatbot(){
    return(
        <div>
            <Header/>
            <Section>
                <SectionTitle>Animated Chatbot UX Research</SectionTitle>
            </Section>
            <center>
                <img src='/images/Chatbot 1.jpg' style={{width: '20%', height:'20%'}}/>
            </center>
            <Section>
                <ProjectText>
                    The demand for social virtual agent or AI Chatbot has significantly increased over the years. 
                    The lack of social interaction from the pandemic could be one of the reasons behind the increase. 
                    This pilot study project explore the effects of animated emobdied chatbots could have on user satisfaction
                </ProjectText>
                
            </Section>
            <center>
                <img src ='/images/ExampleChatbots.jpg' style={{width: '60%', height:'60%'}}/>
            </center>
            <Section>
            <ProjectText>
                   Talking to a virtual conversational 
                   agent or chatbot is one of many social interactions people can have during the current remote work lifestyle.
                   only Replika and Wysa has avatar design built into the UX. However, Replika’s avatar is designed to be an
                   animation that shows up only in the launch interface of the app.   
                </ProjectText>
            </Section>
            <center>
                <img src ='/images/Chatbot 2.jpg' style={{width: '60%', height:'60%'}}/>
            </center>
            <Section>
            <ProjectText>
                   With this project, I proposed to these following design changes to a Health Diet Chatbot:
                   1.	The comparison of animation vs. static Chatbot avatar design 
                   2.	The effect of avatar design on companionship and user satisfaction  
                   3.	Determine key factors that influence the social presence and likeability aspect of the chatbot 
                   4.	Validity of the Godspeed, Pet Companionship and Computer Interface User Satisfaction scales for measuring chatbots 

                </ProjectText>
            </Section>
            <Section>
            <center>
                <img src ='/images/chatbot statistics 1.jpg' style={{width: '60%', height:'60%'}}/>
            </center>
                <ProjectText>
                    We choose an animal avatar due to research indicating sense 
                    of cooperation and warmth that appealed to users and especially to elderly users [1]. 
                    However, the result were shown to be the opposite of what we expected to be. 
                    We suspected the reason for this was the functionality and performance of 
                    chatbot needs to be good enough so that the internal validity for design measurement is not affecte. 
                    Perhaps building the animated avatar on a fully developed Chatbot like Alexa or Siri can ensure internal validity 
                    But with qualitative analysis, 13 out of 15 participants suggested the chatbot needs to improve overall knowledge 
                    of the topic  14 out of 15 participants had key words of: cute, funny, approachable and friendly in their answers 
                    13 out of 15 participants mentioned how basic the chatbot functionality was.

                </ProjectText>
                <ProjectText>
                But with qualitative analysis, 13 out of 15 participants suggested the chatbot needs to improve overall knowledge 
                of the topic  14 out of 15 participants had key words of: cute, funny, approachable and friendly in their answers 
                13 out of 15 participants mentioned how basic the chatbot functionality was.
                </ProjectText>
                 <ProjectText>
                    REFERENCES: [1]	Shaked N. A. (2017). Avatars and virtual agents - relationship interfaces for the elderly. Healthcare technology letters, 4(3), 83–87. https://doi.org/10.1049/htl.2017.0009
 
                    
                </ProjectText>
            </Section>
            <Section>
            <ul style= {{listStyleType:"circle"}}>
                    <li>Evidenced Based Design</li>
                    <li> A/B Testing </li> 
                    <li>Focus Groups</li>
                    <li>Rapid Prototype</li>
                    <li>Wizard of Oz </li>
                </ul>
            </Section>
            <Footer/>
        </div>
    )
}


