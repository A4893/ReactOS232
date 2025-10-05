import React from "react";
import {Route, Routes} from 'react-router-dom';
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Layout from "./components/layout";
import Projects from "./components/projects";
import LoginForm from "./components/services";


const Mainrouter=()=>{
    return (<div>
        <Layout/>
        <Routes>
            <Route exact path="/" element ={<Home />}/>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/contact" element={<Contact />}/>
            <Route exact path="/projects" element={<Projects />}/>
            <Route exact path="/login" element={<LoginForm/>}/>
            
        </Routes>
    </div>)
}

export default Mainrouter;