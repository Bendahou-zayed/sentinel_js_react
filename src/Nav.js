import{Link} from "react-router-dom";
import style from "./nav.module.css";
import logo from "./img/logo.png";
import LoginButton from "./authentification/LoginButton";

function Nav() {
    const Style = {textDecoration: 'none', cursor: "pointer"};
    return ( 
        <nav className={style.nav}>
            <Link to="/" style={Style}>
                <img src={logo} alt = "logo"/>
            </Link>
            <ul className={style.items}>
                <Link className={style.item}><li>SEARCH BAR</li></Link>
                <Link className={style.item}><li>HOME</li></Link>
                <LoginButton/>
                <Link className={style.item}><li>SUPPORT</li></Link>
            </ul>
            
        </nav>
    )
}

export default Nav;