import Item from "./Item/Item";
import s from './Navbar.module.css'

const Navbar = () => {
    return(
        <nav className={s.nav}>
            <Item source='/profile' value="Profile"/>
            <Item source='/dialogs' value="Messages"/>
            <Item source='#' value="News"/>
            <Item source='#' value="Music"/>
            <Item source='#' value="Settings"/>
        </nav>
    )
}

export default Navbar;
