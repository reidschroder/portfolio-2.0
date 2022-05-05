import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap} from '../../wrapper';
import { client } from '../../client';

import './Footer.scss';

const Footer = () => {
  const [formData, setformData] = useState({ name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setformData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }
    client.create(contact)
    .then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
  }
  return (
    <>
    <h2 className='head-text'>Chat with me</h2>

    <div className='app__footer-cards'>
        <div className='app__footer-card'>
            <img src={images.email} alt="email" />
            <a href='mailto:reidschroder2@gmail.com' className='p-text'>reidschroder2@gmail.com</a>
        </div>
        <div className='app__footer-card'>
            <img src={images.mobile} alt="mobile" />
            <a href='tel: +1 (859) 757-5201' className='p-text'>(859) 757-5201</a>
        </div>
    </div>

    
    {!isFormSubmitted ? 
    <div className='app__footer-form app__flex'>
      <div className='app__flex'>
          <input className='p-text' type='text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
      </div>

      <div className='app__flex'>
          <input className='p-text' type='email' placeholder='email' name='email' value={email} onChange={handleChangeInput} />
      </div>

      <div>
        <textarea
        className='p-text'
        placeholder='Your Message'
        value={message}
        name='message'
        onChange={handleChangeInput}
        />
      </div>
      <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
    </div>
    : 
    <div>
      <h3 className='head-text'>Thank you for reaching out!</h3>
    </div>
    }
    </>
  );
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
);