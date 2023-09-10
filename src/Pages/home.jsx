import React, {useEffect, useState} from 'react';
import axios from "axios";
import Layout from "../Components/Layout";
import UserCard from "../Components/UserCard";
import {useSearchParams} from "react-router-dom";

const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [data, setData] = useState([])

    const usernameSort = searchParams.get("sort")
    const usernameGet = searchParams.get("username")

    const usernameSorted = () => {
        if (!usernameSort) {
            setSearchParams((prev) => {
                prev.set("sort", "asc")
                return prev
            })
        }
        if (usernameSort === "asc") {
            setSearchParams((prev) => {
                prev.set("sort", "desc")
                return prev
            })
        }
        if (usernameSort === "desc") {
            setSearchParams((prev) => {
                prev.set("sort", "asc")
                return prev
            })
        }
    }
    const req = async () => {
        const url = new URL(`${process.env.REACT_APP_SERVER_API}/users`)
        if (usernameSort) {
            url.searchParams.set("_order", usernameSort)
            url.searchParams.set("_sort", "username")
        }
        if (usernameGet) {
            url.searchParams.set("username_like", usernameGet)
        }
        const res = await axios.get(url.toString())
        setData(res.data)
    }


    const handleChange = (event) => {
        setSearchParams((prev) => {
            prev.set("username", event.target.value)
            if (!event.target.value) {
                prev.delete("username")
            }
            return prev
        })
    }

    useEffect(() => {
        req()
    }, [searchParams]);

    return (
        <>
            <Layout>
                <div className={"p-20 mx-10 bg-gray-800 h-full flex flex-col align-middle rounded-2xl"}>
                    <h1 className={"flex w-full justify-center text-white text-[40px]"}>Users</h1>
                    <div className={"flex w-full"}>
                        <button onClick={usernameSorted}
                                className={" flex bg-yellow-700 px-5 text-white hover:text-yellow-700 hover:bg-white " +
                                    " text-[15px] rounded-2xl"}
                                type="submit">Sort by username
                        </button>

                        <div className={"max-w-[200px] pl-5 flex items-center justify-center"}>
                            <input placeholder={"Username"} value={usernameGet || ''}
                                   className={"w-full text-black pl-[10px] pr-[60px] rounded-2xl bg-[#F5E9CF]"}
                                   onChange={handleChange}/>
                        </div>
                        <button className={"bg-black text-white rounded-2xl h px-5 ml-5 hover:text-black hover:bg-white"}
                                onClick={() => setSearchParams({})}
                        >
                            Clear
                        </button>
                    </div>
                    {data && <div className={"flex mt-5 flex-col"}>
                        {data.map((elem, idx) => {
                            return <UserCard userData={elem} key={`card-item-${idx}`}/>
                        })}
                    </div>}
                </div>
            </Layout>
        </>
    );
};

export default Home;