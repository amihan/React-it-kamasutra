import Post from "./Post/Post";
import s from './Myposts.module.css'

const Myposts = () => {
    return (
        <div className={s.content}>
            <div>
                My posts
                <div>
                    New posts
                </div>
                <Post name='Post 1' message='Красаучек' source='https://hypixel.net/attachments/rnavgv9-1-jpg.388730/' like='10'/>
                <Post name='Post 2' message='Ещё красиве' source='https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg' like='20'/>
                <Post name='Post 3' message='Мега красавчик' source='https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg' like='1000'/>
            </div>
        </div>
    )
}

export default Myposts;
