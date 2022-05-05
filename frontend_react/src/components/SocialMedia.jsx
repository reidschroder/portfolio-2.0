import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href='https://twitter.com/reidschroder' alt='twitter'> <BsTwitter /></a> 
        </div>
        <div>
        <a href='https://instagram.com/reidschroder' alt='instagram'> <BsInstagram /> </a> 
        </div>
        <div>
        <a href='https://www.linkedin.com/in/reid-schroder-397a29b0/' alt='LinkedIn'> <FaLinkedin /></a> 
        </div>

    </div>
  )
}

export default SocialMedia