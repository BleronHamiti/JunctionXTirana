import { FormattedMessage } from "react-intl"
import {FaTwitter, 
    FaFacebookF,
    FaInstagram,
    FaYoutube} from 'react-icons/fa';

export const SocialMedia = [
    {
        to:'/',
        icon: <FaFacebookF />
    },
    {
        to:'/',
        icon: <FaInstagram />
    },
    {
        to:'/',
        icon: <FaYoutube />
    },
    {
        to:'/',
        icon: <FaTwitter />
    }
]

export const FooterData = [
    {
        category:<FormattedMessage id='company' defaultMessage='Company' />,
        links:[
            {
                link: <FormattedMessage id='about-us' defaultMessage='About Us' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='our-team' defaultMessage='Our Team' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='careers' defaultMessage='Careers' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='our-work' defaultMessage='Our Work' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='partners' defaultMessage='Partners' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='clients' defaultMessage='Clients' />,
                to:'/'
            }
        ]
    },
    {
        category:<FormattedMessage id='support' defaultMessage='Support' />,
        links:[
            {
                link: <FormattedMessage id="contact-us" defaultMessage='Contact Us' />,
                to:'/'
            },
            {
                link: <FormattedMessage id="culture" defaultMessage='Culture' />,
                to:'/'
            },
            {
                link: <FormattedMessage id="blog" defaultMessage='Blog' />,
                to:'/'
            },
            {
                link: <FormattedMessage id="press" defaultMessage='Press' />,
                to:'/'
            },
            {
                link: <FormattedMessage id="q-a" defaultMessage='Q&A' />,
                to:'/'
            },
            {
                link: <FormattedMessage id="affiliates" defaultMessage='Affiliates' />,
                to:'/'
            }
        ]
    },
    {
        category:<FormattedMessage id='trust' defaultMessage='Trust' />,
        links:[
            {
                link: <FormattedMessage id='user-trust' defaultMessage='User Trust' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='guidelines' defaultMessage='Guidelines' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='privacy-policy' defaultMessage='Privacy Policy' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='terms-of-use' defaultMessage='Terms of use' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='responsibility' defaultMessage='Responsibility' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='security' defaultMessage='Security' />,
                to:'/'
            }
        ]
    }
]