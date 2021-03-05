import { React } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        { post: 'Hi, how are you?', likesCount: 4 },
        { post: 'Its my first post', likesCount: 56 },
        { post: 'Blablabla', likesCount: 33 },
        { post: 'Dadada', likesCount: 88 },
    ];

    let postsElements = posts
        .map(p => <Post message={p.post} like={p.likesCount} />)

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
