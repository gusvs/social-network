import { React } from "react";
import s from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://avatars.mds.yandex.net/get-zen_doc/48747/pub_5a29011e9d5cb34737864543_5a29013ce86a9e41b4f4b9f3/scale_1200"></img>
            </div>
            <div>ava + description</div>
            <MyPosts />
        </div>
    );
};

export default Profile;
