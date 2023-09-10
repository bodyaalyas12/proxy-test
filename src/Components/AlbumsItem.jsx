import React from 'react';

const AlbumsItem = ({album}) => {
    return <div className={"flex flex-col mt-5 border-green-700 rounded-[30px] p-5 bg-green-200"}>
        <h3 className={"text-[16px] flex text-blue-600"}>Title:<p
            className={"text-emerald-700 pl-[3px]"}>{album?.title}</p></h3>
    </div>
};

export default AlbumsItem;