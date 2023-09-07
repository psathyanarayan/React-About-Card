import React from "react"
import "/src/styles/Main.css"
export default function Main() {
    return(
        <div className="main">
            <h2>P Sathya Narayan</h2>
            <p className="sde">Software Developer</p>
            <h4><a href="www.sathya.live">sathya.live</a></h4>
            <div className="button">
                <span className="email"><button><i className="fa-solid fa-envelope"></i>Email</button></span>
                <span className="linkedin"><button><i className="fa-brands fa-linkedin"></i>LinkedIn</button></span>
            </div>
            <div className="about">
                <h3>About</h3>
                <p>I am a Software developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
            <div className="interest">
            <h3>Interest</h3>
                <p>Within the realm of technology and innovation, I have a deep passion and expertise in Django, React, and Machine Learning. These are just a few of the exciting areas where my interests and skills converge.</p>
            </div>
        </div>
    )
}