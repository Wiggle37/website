import React from "react";

import "./Home.css";

export default function Home() {
    const quotes = [
        "yes",
        "no",
        "yabadabadoo"
    ]

    return (
        <div className="Home">
            <h1>Wiggle</h1>
            <p>{quotes[Math.floor(Math.random() * quotes.length)]}</p>

            <p>
                welcome to my website
            </p>
        </div>
    );
}