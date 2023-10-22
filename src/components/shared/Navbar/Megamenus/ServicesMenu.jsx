import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import { ServicesData } from '../data'
import './megamenu.scss'
import StyledLink from '../../StyledLink/StyledLink'

const ServicesMenu = () => {
    return (
        <div className='nav-megamenu services-megamenu'>
            <div className="menu-links">
                <h5><FormattedMessage id='services' defaultMessage='Services' /></h5>
                <div className="inner-links">
                    {ServicesData.map((props) => {
                        return(
                            <Link to={props.to} className='menu-main-link'>
                                <div className="bg" style={{background: `${props.bg}`}}></div>
                                <div className="main">
                                    <div className="icon-container">
                                        <div className="icon" style={{content: `url(${props.icon})`}}></div>
                                    </div>
                                    <div className="block">
                                        <h6>{props.title}</h6>
                                        <p>{props.text}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>

            <div className="right">
                <div className="logo"></div>
                <h6>
                    <FormattedMessage id='we-can-shape-your-vision' 
                    defaultMessage='We can shape your vision' />
                </h6>
                <p>
                    <FormattedMessage id='services-right-text' 
                        defaultMessage='We use design expertise to transform ideas into images that ignite emotion, create brand cultures, and create value.' />
                </p>
                <div className="link">
                    <StyledLink 
                        to='/'
                        link={<FormattedMessage id='view-all-services' defaultMessage='View All Services' />}
                    />
                </div>
            </div>
        </div>
    )
}

export default ServicesMenu