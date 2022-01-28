import React from "react";
import { Link } from "react-router-dom";

import "./NotFound.css";

export default function NotFound() {
    return (
        <div className="NotFound">
            <h1>404 Not Found</h1>           
            <Link to="/">
                <button>
                    Go Back To Home
                </button>
            </Link>
        </div>
    );
}
