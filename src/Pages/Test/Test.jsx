import React from "react";

import './Test.css';

export default function Test() {
    let _ud;
    async function userData() {
        _ud = await fetch("http://localhost:8080/accounts/getAccount/...", {
            method: "GET",
            headers: {
                "Content-Type": "applications/json"
            }
        });

        console.log(_ud);
    }

    return (
        <div className="Test">
            <form onSubmit={() => userData()}>
                <input type="submit" value="Submit" />
            </form>
            <p>
                {_ud}
            </p>
        </div>
    );
}