import React from "react";
import Timeline from '../components/TimeLine/TimeLine'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Acomplishments from '../components/Acomplishments/Acomplishments'

export default function About(){
    return(
        <div>
            <Header/>
            <Timeline/>
            <Acomplishments/>
            <Footer/>
        </div>
    )
}

