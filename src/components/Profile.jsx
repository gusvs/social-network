import { React } from "react";
import s from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://avatars.mds.yandex.net/get-zen_doc/48747/pub_5a29011e9d5cb34737864543_5a29013ce86a9e41b4f4b9f3/scale_1200"></img>
            </div>
            <div>ava + description</div>
            <div>
                My Posts
				<div>New post</div>
                <div>
                    <div className={s.item}>Post 1</div>
                    <div className={s.item}>Post 2</div>
                    <div>Post 3</div>
                    <div>Post 4</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
