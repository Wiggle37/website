import React from "react"

import "./About.css"

export default function About() {
    return (
        <div className="About">
            <h1>Hello! I'm Wiggle</h1>
            <body>
                <p>I enjoy programming in my freetime and playing video games.</p>
                <p>I am a self taught programmer and I am currently learning Java and JavaScript/Typescript</p>
                <p>Some of my hobbies are: 
                    <ul>
                        <li>Playing video games</li>
                        <li>Coding</li>
                        <li>Sleeping</li>
                        <li>Spending time with my dog</li>
                    </ul>
                </p>

                <p>You can contact me <a href="/contact">"here"</a></p>
            </body>
        </div>
    )
}