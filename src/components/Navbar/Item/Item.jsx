import s from './Item.module.css'
import {NavLink} from "react-router-dom";

const Item = (props) => {
    return (
        <div className={s.item}>
            <img src="" alt=""/>
            <NavLink to={props.source} className = { navData => navData.isActive ? s.active : s.item }>{props.value}</NavLink>
        </div>
    )
}

export default Item;