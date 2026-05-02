import "./LoginForm.css";
import { useState, useContext } from "react"
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
function LoginForm() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    async function submitHandler(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd);
        navigate("/");
        auth.login();

        const user = {
            nom: data.inputUsername,
            password: data.inputPassword
        }

        try {
            const response = await
                fetch('http://localhost:5000/api/user/login', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            });
            const data = await response.json()
            localStorage.setItem("token", data.token)
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <div className="center">
            <form className="frameLF" onSubmit={submitHandler}>
                <h1>Login</h1>
                <label htmlFor="inputUsername">Pseudonyme</label>
                <input type="text" id="inputUsername" name="inputUsername"/>

                <label htmlFor="inputPassword">Mot de passe</label>
                <input type="password" id="inputPassword" name="inputPassword"/>
                <button type="submit">Login</button>
            </form>
        </div>
        
        );
    }


export default LoginForm;  