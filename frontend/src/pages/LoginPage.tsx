import {FormEvent, useState} from "react";
import {useAuth} from "../auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import "./Login.css"
import ParticlesBackground from "./ParticlesBackground";

export default function LoginPage(){
    const [loginUsername, setLoginUsername] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [error, setError] = useState('')

    const auth = useAuth()
    const navigate = useNavigate();

    const handleLogin = (event : FormEvent) => {
        event.preventDefault()
        auth.login(loginUsername, loginPassword)
            .catch(e => setError(e.message))
    }

    const handleRegister = () => {
        auth.setRegister(true)
        navigate('/register')
    }


    return(
        <div>
            <ParticlesBackground/>
            <ul className={"list"}>
                <h2 className={"greeting"}>Welcome to StockWatch</h2>
                <h3 className={"login"}>Login</h3>
                <form onSubmit={handleLogin}>
                    <p><input className={"login-input"} type="text" placeholder={"username"} value={loginUsername} required={true} onChange={ev => setLoginUsername(ev.target.value)}/></p>
                    <p><input className={"login-input"} type="password" placeholder={"password"} value={loginPassword} required={true} onChange={ev => setLoginPassword(ev.target.value)}/></p>
                    <button className={"login-button"} type={"submit"}>Login</button>
                </form>
                <button className={"login-button"} onClick={() => handleRegister()}>Registration</button>
                <div>
                <em>{error}</em>
                </div>
            </ul>
        </div>
    )
}