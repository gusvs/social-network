import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      {/* <div>
        <img
          className={s.headerImg}
          src="https://i.ibb.co/r4TMgxT/91599a507e7c8ba.jpg"
        ></img>
      </div> */}
      <div className={s.descriptionBlock}>
        <img alt='' src={props.profile.photos.large} />
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  )
}

export default ProfileInfo
