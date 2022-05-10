import s from './Item.module.css'

const Item = (props) => {
    return (
        <div className={s.item}>
            <img src="" alt=""/>
            <a href="#">{props.value}</a>
        </div>
    )
}

export default Item;
