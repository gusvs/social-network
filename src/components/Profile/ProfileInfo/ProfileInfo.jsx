import React, {useState} from 'react'
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.png'
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
  const {profile, status, updateStatus, savePhoto, isOwner, saveProfile} = props
  const [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader/>
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(
        () => {
          setEditMode(false)
        }
    )
  }

  return (
      <div>

        <div className={s.descriptionBlock}>
          <img alt='' src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
          {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
          { editMode
              ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
              : <ProfileData
                  goToEditMode={() => {setEditMode(true)}}
                  profile={profile}
                  isOwner={isOwner}
              />
          }
          <ProfileStatusWithHooks
              status={status}
              updateStatus={updateStatus}
          />
        </div>
      </div>
  )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return <div>
    {isOwner && <button onClick={goToEditMode}>Edit profile</button>}
    <div>
      <b>Name: </b>{profile.fullName}
    </div>
    <div>
      <b>Looking for a job: </b>{profile.lookingForAJob ? "yes" : "no"}
    </div>
    {profile.lookingForAJob &&
        <div>
          <b>My professional skills: </b>{profile.lookingForAJobDescription}
        </div>}
    <div>
      <b>About me: </b>{profile.aboutMe}
    </div>
    <div>
      <b>Contacts: </b>{Object.keys(profile.contacts).map(key => {
      return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
    })
    }
    </div>
  </div>
}
const Contact = ( {contactTitle, contactValue}) => {
  return <div className={s.contact}>
    <b>{contactTitle}: </b>{contactValue}
  </div>
}

export default ProfileInfo
