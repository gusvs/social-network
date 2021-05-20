import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={s.headerImg}src="https://i.ibb.co/r4TMgxT/91599a507e7c8ba.jpg"></img>
            </div>
            <div className={s.descriptionBlock}>ava + description</div>
        </div>
    )
}

export default ProfileInfo;