import  s from './Header.module.css';

const Header = () => {
    return(
        <header className={s.header}>
                <img className={s.header__img} src="https://i.pinimg.com/originals/f6/7a/3a/f67a3a261f0c952640f9c1d214d73e96.png" alt=""/>
        </header>
    )
}

export default Header;
