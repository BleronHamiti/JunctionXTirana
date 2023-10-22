import { FormattedMessage } from 'react-intl'


import portfolio1 from '../../../assets/nav/portfolio1.svg'
import portfolio2 from '../../../assets/nav/portfolio2.svg'
import portfolio3 from '../../../assets/nav/portfolio3.svg'
import portfolio4 from '../../../assets/nav/portfolio4.svg'
import portfolio5 from '../../../assets/nav/portfolio5.svg'
import portfolio6 from '../../../assets/nav/portfolio6.svg'

import about1 from '../../../assets/nav/about1.svg'
import about2 from '../../../assets/nav/about2.svg'
import about3 from '../../../assets/nav/about3.svg'
import about4 from '../../../assets/nav/about4.svg'
import about5 from '../../../assets/nav/about5.svg'
import about6 from '../../../assets/nav/about6.svg'

import portfolioImg1 from '../../../assets/nav/portfolioImg1.jpg'
import portfolioImg2 from '../../../assets/nav/portfolioImg2.jpg'

import aboutIcon1 from '../../../assets/nav/aboutIcon1.svg'
import aboutIcon1red from '../../../assets/nav/aboutIcon1red.svg'
import aboutIcon1green from '../../../assets/nav/aboutIcon1green.svg'
import aboutIcon1blue from '../../../assets/nav/aboutIcon1blue.svg'

export const AboutData2 = [
    {
        icon: aboutIcon1,
        iconRed:aboutIcon1red,
        iconGreen:aboutIcon1green,
        iconBlue:aboutIcon1blue,
        title: <FormattedMessage id='our-strategy' defaultMessage='Our strategy' />,
        text:<FormattedMessage id='about-megamenu-text1' defaultMessage='Our ability to create sustainable brand strategies based on real-world applications allows us to translate original ideas into unique brand solutions.' />
    },
    {
        icon: aboutIcon1,
        iconRed:aboutIcon1red,
        iconGreen:aboutIcon1green,
        iconBlue:aboutIcon1blue,
        title: <FormattedMessage id='our-strategy' defaultMessage='Our strategy' />,
        text:<FormattedMessage id='about-megamenu-text1' defaultMessage='Our ability to create sustainable brand strategies based on real-world applications allows us to translate original ideas into unique brand solutions.' />
    },
    {
        icon: aboutIcon1,
        iconRed:aboutIcon1red,
        iconGreen:aboutIcon1green,
        iconBlue:aboutIcon1blue,
        title: <FormattedMessage id='our-strategy' defaultMessage='Our strategy' />,
        text:<FormattedMessage id='about-megamenu-text1' defaultMessage='Our ability to create sustainable brand strategies based on real-world applications allows us to translate original ideas into unique brand solutions.' />
    }
]

export const AboutData = [
    {
        to:'/',
        icon: about1,
        title: <FormattedMessage id='about-us' defaultMessage='About us' />,
        bg:'#4F9AFF'
    },
    {
        to:'/',
        icon: about2,
        title: <FormattedMessage id='partners' defaultMessage='Partners' />,
        bg:'#585CBC'
    },
    {
        to:'/',
        icon: about3,
        title: <FormattedMessage id='our-team' defaultMessage='Our team' />,
        bg:'#854CDB'
    },
    {
        to:'/',
        icon: about4,
        title: <FormattedMessage id='careers' defaultMessage='Careers' />,
        bg:'#37B172'
    },
    {
        to:'/',
        icon: about5,
        title: <FormattedMessage id='our-clients' defaultMessage='Our clients' />,
        bg:'#EB8341'
    },
    {
        to:'/',
        icon: about6,
        title: <FormattedMessage id='culture' defaultMessage='Culture' />,
        bg:'#D662A0'
    }
]

export const PortfolioData2 = [
    {
        to:'/',
        img:portfolioImg1
    },
    {
        to:'/',
        img:portfolioImg2
    },
    {
        to:'/',
        img:portfolioImg1
    }
]

export const PortfolioData = [
    {
        to:'/',
        icon: portfolio1,
        title: <FormattedMessage id='our-work' defaultMessage='Our work' />,
        bg:'#C173E7'
    },
    {
        to:'/',
        icon: portfolio2,
        title: <FormattedMessage id='campaigns' defaultMessage='Campaigns' />,
        bg:'#4F9AFF'
    },
    {
        to:'/',
        icon: portfolio3,
        title: <FormattedMessage id='brands' defaultMessage='Brands' />,
        bg:'#37B172'
    },
    {
        to:'/',
        icon: portfolio4,
        title: <FormattedMessage id='ui-ux-design' defaultMessage='UI/UX Design' />,
        bg:'#5C167E'
    },
    {
        to:'/',
        icon: portfolio5,
        title: <FormattedMessage id='case-studies' defaultMessage='Case studies' />,
        bg:'#CE6A6A'
    },
    {
        to:'/',
        icon: portfolio6,
        title: <FormattedMessage id='game-design' defaultMessage='Game design' />,
        bg:'#EB8341'
    },
]