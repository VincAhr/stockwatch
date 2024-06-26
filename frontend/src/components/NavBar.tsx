import {useNavigate} from "react-router-dom";
import {useAuth} from "../auth/AuthProvider";
import "./NavBar.css"
import BurgerMenu from "./BurgerMenu";
import {useState} from "react";


export default function NavBar(){
    const [BurgerMenuOpen, setBurgerMenuOpen] = useState(false);
    const nav = useNavigate()
    const auth = useAuth()

    const toggleBurgerMenu = () => {
        setBurgerMenuOpen(!BurgerMenuOpen)
    }

    return(
        <div>
            <div className={"navigation"}>
                <div className={"hamburger-menu"} onClick={toggleBurgerMenu}>
                    <BurgerMenu isOpen={BurgerMenuOpen}/>
                </div>
                {BurgerMenuOpen
                ?
                <ul>
                <li> <button className={"button"} onClick={()=> nav("/home")}>Home</button></li>
                <li> <button className={"button"} >Depotlist </button></li>
                <li> <button className={"button"} onClick={auth.logout}> Logout </button></li>
                </ul>
                : null
                }
            </div>
        </div>
    )
}