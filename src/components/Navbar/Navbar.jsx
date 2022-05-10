import Item from "./Item/Item";
import s from './Navbar.module.css'

const Navbar = () => {
    return(
        <nav className={s.nav}>
            <Item value="Profile"/>
            <Item value="Messages"/>
            <Item value="News"/>
            <Item value="Music"/>
            <Item value="Settings"/>
        </nav>
    )
}

export default Navbar;
