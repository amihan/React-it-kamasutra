import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                <div className={s.dialogs__item}>
                    <NavLink to="/dialogs/1">Amir</NavLink>
                </div>
                <div className={s.dialogs__item}>
                    <NavLink to="/dialogs/2">Sasha</NavLink>
                </div>
                <div className={s.dialogs__item}>
                    <NavLink to="/dialogs/3">Urod</NavLink>
                </div>
            </div>
            <div className={s.dialogs__messages}>
                <div className={s.dialogs__message }>
                    Hi
                </div>
                <div className={s.dialogs__message}>
                    Ha
                </div>
                <div className={s.dialogs__message}>
                    Urod
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
