import React from 'react'
import {BsLinkedin, BsGithub} from "react-icons/bs"
import {FaFacebookF, FaDiscord} from "react-icons/fa"

const SocialMedia = () => {
    return (
    <div className='app__social'>
        <div className='app__social--icon'>
            <BsLinkedin />
        </div>
        <div className='app__social--icon'>
            <BsGithub />
        </div>
        <div className='app__social--icon'>
            <FaFacebookF />
        </div>
        <div className='app__social--icon'>
            <FaDiscord />
        </div>
    </div>
)
}

export default SocialMedia