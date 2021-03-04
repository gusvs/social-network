import { React } from "react";
import s from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://i.ibb.co/r4TMgxT/91599a507e7c8ba.jpg"></img>
            </div>
            <div>ava + description</div>
            <MyPosts />
        </div>
    );
};

export default Profile;
