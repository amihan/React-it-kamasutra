import s from './Profile.module.css'

const Profile = () => {
    return(
        <div className={s.content}>
            <div>
                <img className={s.content__img} src="https://cdn.pixabay.com/photo/2017/01/07/12/39/sea-1960262_1280.jpg" alt=""/>
            </div>
            <div>
                ava+description
            </div>
            <div>
                My posts
                <div>
                    New posts
                </div>
                <div>
                    <div className={s.item}>
                        Post 1
                    </div>
                    <div className={s.item}>
                        Post 2
                    </div>
                    <div className={s.item}>
                        Post 3
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
