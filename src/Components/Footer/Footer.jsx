import React from "react";

import "./Footer.css";

export default function Footer() {
    return (
        <div className="Footer">
            <footer>
                <a className="left" href="/about">
                    <p>About</p>
                </a>
                <a className="left" href="/terms">
                    <p>Terms</p>
                </a>
            </footer>
        </div>
    );
}