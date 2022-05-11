import s from './Item.module.css'

const Item = (props) => {
    return (
        <div className={s.item}>
            <img src="" alt=""/>
            <a href={props.source}>{props.value}</a>
        </div>
    )
}

export default Item;
