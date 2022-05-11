import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                <div className={s.dialogs__item}>
                    Amir
                </div>
                <div className={s.dialogs__item}>
                    Sasha
                </div>
                <div className={s.dialogs__item}>
                    Urod
                </div>
            </div>
            <div className={s.dialogs__messages}>
                <div className={s }>
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
