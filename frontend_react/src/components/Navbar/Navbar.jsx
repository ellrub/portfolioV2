import React, {useState} from 'react';
import {HiMenu, HiX} from "react-icons/hi";
import {motion} from "framer-motion";

import "./Navbar.scss";

const Navbar = () => {
const [toggle, setToggle] = useState(false)

    return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <i className="fa-solid fa-r"></i>
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-n"></i>
        </div>
        <ul className='app__navbar-links'>
            {["home", "about", "projects", "skills", "contact"].map((item) => (
                <li className="app__flex p-text" key={`link-${item}`}>
                    <div />
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>
        <div className='app__navbar-menu'>
            <HiMenu onClick={() => setToggle(true)} />

            {toggle && (
                <motion.div
                    whileInView={{x: [200, 0]}}
                    transition={{duration: 0.85, ease: "easeOut"}}
                >
                    <HiX onClick={() => setToggle(false)} />
                    <ul>
                        {["home", "about", "projects", "skills", "contact"].map((item) => (
                        <li key={item}>
                            <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                        </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </div>
    </nav>
)}

export default Navbar;