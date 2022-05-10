import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.post}>
            <img src={props.source} className={s.post__image}/>
            <div className={s.post__content}>
                {props.name} <br/>
                {props.message}
            </div>
            <div className={s.post__like}>{props.like} like</div>
        </div>
    )
}

export default Post;
