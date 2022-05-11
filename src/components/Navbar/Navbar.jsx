import Item from "./Item/Item";
import s from './Navbar.module.css'

const Navbar = () => {
    return(
        <nav className={s.nav}>
            <Item source='/profile' value="Profile"/>
            <Item source='/dialogs' value="Messages"/>
            <Item source='/news' value="News"/>
            <Item source='/music' value="Music"/>
            <Item source='/settings' value="Settings"/>
        </nav>
    )
}

export default Navbar;
