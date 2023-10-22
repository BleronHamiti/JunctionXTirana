import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import './megamenu.scss'
import { AboutData, AboutData2 } from '../data'
// import Carousel from 'react-elastic-carousel'

const AboutMenu = () => {

    return (
        <div className='nav-megamenu about-megamenu'>
            <div className="menu-links">
                <h5><FormattedMessage id='about' defaultMessage='About' /></h5>
                <div className="inner-links">
                    {AboutData.map((props) => {
                        return(
                            <Link to={props.to} className='menu-main-link'>
                                <div className="bg" style={{background: `${props.bg}`}}></div>
                                <div className="main">
                                    <div className="icon-container">
                                        <div className="icon" style={{content: `url(${props.icon})`}}></div>
                                    </div>
                                    <div className="block">
                                        <h6>{props.title}</h6>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>

            <div className="right">
            
            </div>
        
        </div>
    )
}

export default AboutMenu