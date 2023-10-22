import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { FormattedMessage } from "react-intl";

import { CgClose } from 'react-icons/cg'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { BiSliderAlt, BiSupport,BiChair } from 'react-icons/bi'
import { RiInformationFill, RiApps2Fill } from 'react-icons/ri'
import { AboutData  } from '../../Navbar/data';


const Sidebar = (props) => {    

    const [list,showList] = useState(false);
    const [list2,showList2] = useState(false);
    const [list3,showList3] = useState(false);
    function show(){
        showList(!list);
    }
    function show2(){
        showList2(!list2);
    }
    function show3(){
        showList3(!list3);
    }

    return (
        <div className='mobile-sidebar'>
             <div className='sidebar-logo-row'>
                <Link to='/'>
                    <div className='mobile-logo-container'></div>
                </Link>
                <button onClick={props.click}><CgClose/> </button>
            </div>

            <div className='mobile-sidebar-links'>

                <div className='sidebar-dropdown'>
                    <div className='nav-sidebar-link' onClick={show}>
                        <Link to='/' className='nav-anchor'>
                            <BiSliderAlt />
                            <FormattedMessage id="services" defaultMessage='Home'/> 
                        </Link>
                    </div> 
                </div>

                <div className='sidebar-dropdown'>
                    <div className='nav-sidebar-link' onClick={show2}>
                        <Link to='/AllServices' className='nav-anchor'>
                            <RiInformationFill />
                            <FormattedMessage id="about" defaultMessage='About Us '/> 
                        </Link>
                        <div className='dropdown-arrow'>
                            <MdKeyboardArrowDown/> 
                        </div>
                    </div>
                    {list2===true &&
                        <div className="mobile-dopdown">
                            {AboutData.map((props) => {
                                return(                         
                                    <div className="inner-links">
                                        <Link to={props.to}>{props.title}</Link>
                                    </div>                            
                                )                            
                            })}
                        </div>
                    } 
                </div>

                <div className='nav-sidebar-link'>
                    <Link to='/Resources' className='nav-anchor'>
                        <BiChair />
                        <FormattedMessage id="flights" defaultMessage='Flights' />
                    </Link>
                </div>

                <div className='nav-sidebar-link'>
                    <Link to='/' className='nav-anchor'>
                        <RiApps2Fill />
                        <FormattedMessage id="hotels" defaultMessage='Hotels' />
                    </Link>
                </div>
                
                <div className='nav-sidebar-link'>
                    <Link to='/' className='nav-anchor'>
                        <RiApps2Fill />
                        <FormattedMessage id="Rent-Car's" defaultMessage="Rent Car's" />
                    </Link>
                </div>

                <div className='nav-sidebar-link'>
                    <Link to='/' className='nav-anchor'>
                        <BiSupport />
                        <FormattedMessage id="contact-us" defaultMessage='Contact Us' /> 
                    </Link>
                </div>
            </div>

            <div className='sidebar-auth'>
                <Link to='/login' className='contact-us'>
                    <FormattedMessage id="login" defaultMessage='Log In' />
                </Link>
            </div>

            <div className='space'></div>
        </div>
    )
}

export default Sidebar