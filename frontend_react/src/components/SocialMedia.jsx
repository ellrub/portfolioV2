import React from 'react'
import {BsLinkedin, BsGithub} from "react-icons/bs"
import {FaDiscord} from "react-icons/fa"

const SocialMedia = () => {
    return (
    <div className='app__social'>
        <div className='app__social--icon'>
            <a href="https://www.linkedin.com/in/ruben-ellefsen/" target="_blank" rel="noopener noreferrer" ><BsLinkedin /></a>
        </div>
        <div className='app__social--icon'>
            <a href="https://github.com/ellrub" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
        </div>
        <div className='app__social--icon'>
        <a href="https://discord.com/users/116322935739908097" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
        </div>
    </div>
)
}

export default SocialMedia