import React from 'react'
import './styledLink.scss'
import { Link } from 'react-router-dom'

const StyledLink = (props) => {
    return (
        <Link to={props.to} className='shared-styled-link1'>
            <span>{props.link}</span>
            <div className="bg"></div>
        </Link>
    )
}

export default StyledLink