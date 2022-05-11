import Myposts from "./MyPosts/Myposts";
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.profile__container}>
                <img className={s.profile__img}
                     src="https://cdn.pixabay.com/photo/2017/01/07/12/39/sea-1960262_1280.jpg" alt=""/>
            </div>
            <div>
                ava+description
            </div>
            <textarea></textarea>
            <button>Add post</button>
            <Myposts/>
        </div>
    )
}

export default Profile;
