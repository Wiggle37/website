import React from "react";

import './Test.css';

export default function Test() {
    let _ud = "";
    async function userData() {
        _ud = await fetch("http://localhost:8080/accounts/getAccount/matthew.t.rose.2008%40outlook.com", {
            method: "GET"
        }).then(
            req => req.json()
        );

        var ele = document.createElement("p");
        var text = document.createTextNode(`e: ${JSON.stringify(_ud)}`);
        ele.appendChild(text);
        var element = document.getElementById("ook");
        element.appendChild(ele);
    }

    return (
        <div className="Test" id="ook">
            <button onClick={() => userData()}>clicketh me</button>
        </div>
    );
}