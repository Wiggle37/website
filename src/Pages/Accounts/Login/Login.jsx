import React from "react";

import "./Login.css";

export default function Login() {
    async function Login() {
        const tag = document.createElement("p");
        const text = document.createTextNode("Login not found, please create an account");
        tag.appendChild(text)
        const element = document.getElementsByClassName("loginBox");
        element.appendChild(tag)
    }

    return (
        <div className="Login">
            <h1 className="title">Login</h1>
            <div className="loginBox">
                <form action={() => Login()}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" placeholder="Email" required/>
                    <br />
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" placeholder="Password" required/>
                    <br />

                    <button className="submitButton" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}