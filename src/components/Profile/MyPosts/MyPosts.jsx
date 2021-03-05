import { React } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {post: 'Hi, how are you?', likesCount: 4},
        {post: 'Its my first post', likesCount: 56},
    ];
    
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
                <Post message={postsData[0].post} like={postsData[0].likesCount} />
                <Post message={postsData[1].post} like={postsData[1].likesCount} />
            </div>
        </div>
    );
};

export default MyPosts;
