import React, {FC} from 'react'
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../types/types";

type UsersProps = {
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    pageSize: number
    users: UserType[]
    followingInProgress: number[]
    follow: (userId:number) => void
    unfollow: (userId:number) => void
}
let Users: FC<UsersProps> = (props) => {

    return (
        <div>
            <Paginator
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
                totalItemsCount={props.totalUsersCount}
                pageSize={props.pageSize}
            />

            {props.users.map((u) => (
                <User
                    key={u.id}
                    user={u}
                    followingInProgress={props.followingInProgress}
                    follow={props.follow}
                    unfollow={props.unfollow}
                />
            ))}
        </div>
    )
}

export default Users
