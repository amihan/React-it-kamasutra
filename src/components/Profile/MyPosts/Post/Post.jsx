import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.post}>
            <img src="https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg" className={s.post__image}/>
            <span>
                Post 1
            </span>
            <div>like</div>
        </div>
    )
}

export default Post;
