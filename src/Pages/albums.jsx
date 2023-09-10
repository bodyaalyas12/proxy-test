import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import Layout from "../Components/Layout";
import AlbumsItem from "../Components/AlbumsItem";

const Albums = () => {
    const [data, setData] = useState([])
    const {id} = useParams()
    const req = async () => {
        const res = await axios.get(`${process.env.REACT_APP_SERVER_API}/albums?userId=${id}`)
        setData(res.data)
    }
    useEffect(() => {
        req()
    }, []);

    return (<>
        <Layout>
            <div className={"flex flex-col w-full p-10"}>
                <p className={"w-full text-center mt-5 text-white"}>Album</p>
                {data && data.map((elem, idx) => {
                    return <AlbumsItem album={elem} key={idx}/>
                })}
            </div>
        </Layout>
    </>)

};

export default Albums;