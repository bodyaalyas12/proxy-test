import React from 'react';
import {Link} from "react-router-dom";

const UserCard = ({userData}) => {
    return (
        <div className={"flex w-full border-b-[2px]  border-green-700"}>
            <div className={"flex w-full"}>
                <p className={"text-white w-[5%]"}>ID: {userData?.id}</p>
                <p className={"text-white w-[35%] "}>Username: {userData?.username}</p>
                <p className={"text-white w-[30%]"}>Company: {userData?.company?.name}</p>
                <p className={"text-white"}>Email: {userData?.email}</p>
            </div>
            <div className={"flex"}>
                <Link className={" flex"} to={`user/${userData?.id}/posts`}>
                    <p className={"text-blue-600 pl-5"}>posts</p>
                </Link>
                <Link className={"flex"} to={`user/${userData?.id}/albums`}>
                    <p className={"text-blue-600 pl-5"}>albums</p>
                </Link>
            </div>

        </div>
    );
};

export default UserCard;