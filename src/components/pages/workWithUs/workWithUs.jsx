import React from 'react'
import { FormattedMessage } from 'react-intl'
import './workWithUs.scss'
import StyledLink from '../../shared/StyledLink/StyledLink'

const WorkWithUs = () => {
    return (
        <div className='next-level-component'>
            <div className="bg1"></div>
            <div className="text">
                <h1>
                    <FormattedMessage id='home-next-level-title' 
                    defaultMessage='Travel Bold, Collect Gold!'/>
                </h1>
                <h1>
                    <FormattedMessage id='home-next-level-title' 
                    defaultMessage=' Your adventure awaits with bonus points.'/>
                </h1>
                <p>
                    <FormattedMessage id='home-next-level-text' 
                    defaultMessage='Let us give your company creativity and attraction it deserves'/>
                </p>
                <div className="link-container">
                    <StyledLink 
                        to='/'
                        link={<FormattedMessage id='get-started' defaultMessage='Get Started' />}
                    />
                </div>
                
            </div>
        </div>
    )
}

export default WorkWithUs