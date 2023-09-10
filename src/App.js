import React from "react";
import {Route, Routes} from "react-router-dom";
import Albums from "./Pages/albums";
import Home from "./Pages/home";
import Posts from "./Pages/posts";

const App = () => {

    return (<>
            <Routes>
                <Route path='/' element={<Home/>}>Home Page</Route>
                <Route path='/user/:id/albums' element={<Albums/>}>Albums</Route>
                <Route path='/user/:id/posts' element={<Posts/>}></Route>
            </Routes>
        </>

    );
}

export default App;
