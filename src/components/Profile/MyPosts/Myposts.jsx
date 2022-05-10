import Post from "./Post/Post";
import s from './Myposts.module.css'

const Myposts = () => {
    return(
        <div className={s.content}>
            <div>
                My posts
                <div>
                    New posts
                </div>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default Myposts;
