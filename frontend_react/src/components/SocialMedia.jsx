import React from 'react'
import {BsLinkedin, BsGithub} from "react-icons/bs"
import {FaFacebookF, FaDiscord} from "react-icons/fa"

const SocialMedia = () => {
    return (
    <div className='app__social'>
        <div>
            <BsLinkedin />
        </div>
        <div>
            <BsGithub />
        </div>
        <div>
            <FaFacebookF />
        </div>
        <div>
            <FaDiscord />
        </div>
    </div>
)
}

export default SocialMedia