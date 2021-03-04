import { React } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>add post</button>
            </div>
            <div>
                <Post message='Hi, how are you?' like='4' />
                <Post message='Its my first post' like='56' />
            </div>
        </div>
    );
};

export default MyPosts;
