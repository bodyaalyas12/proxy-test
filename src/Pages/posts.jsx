import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Layout from "../Components/Layout";
import PostItem from "../Components/PostItem";

const Posts = () => {
    const {id} = useParams()
    const [data, setData] = useState([])

    const req = async () => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            setData(res.data)
    }
    useEffect(() => {
        req()
    }, []);

    return (
        <Layout>
            <div className={"flex flex-col w-full p-10"}>
                <p className={"w-full text-white text-center mt-5"}>Posts</p>
                {data && data.map((elem, idx) => {
                    return <PostItem post={elem} key={idx}/>
                })}
            </div>
        </Layout>
    );
};

export default Posts;