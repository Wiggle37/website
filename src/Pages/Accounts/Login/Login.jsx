import React from "react";

import "./Login.css";

export default function Login() {
    return (
        <div className="Login">
            <h1 className="title">Login</h1>
            <div className="loginBox">
                <form>
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