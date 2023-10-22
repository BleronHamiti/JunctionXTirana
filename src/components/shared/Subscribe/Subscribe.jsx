import React, { useState } from 'react';
import { BiEnvelope } from 'react-icons/bi';
import { FormattedMessage } from 'react-intl';
import './Subscribe.scss'

const Subscribe = () => {

    const [email2, setEmail2] = useState('');

    return(
        <div class="area2">
        <ul class="circles02">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className='shared-subscribe-components'>
            <div className="bg"></div>
            <div className="bottom">
                <p>
                    <FormattedMessage id='subscribe-text' defaultMessage='Stay in touch with us' />
                </p>
                <h2>
                    <FormattedMessage id='subscribe-title' 
                        defaultMessage="Subscribe to newsletter" />
                </h2>
                <div className="email-container">
                    <span><BiEnvelope /></span>
                    <input type="email" 
                        id='email2'
                        name='email2'
                        value={email2}
                        onChange={(e) => setEmail2(e.target.value)}
                        placeholder='Enter email address...'
                    />
                    <button><FormattedMessage id='subscribe' defaultMessage='Subscribe' /></button>
                </div>
            </div>
            </div>

        </div>
    )
};

export default Subscribe;
