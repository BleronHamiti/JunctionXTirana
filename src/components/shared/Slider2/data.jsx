import { FormattedMessage } from 'react-intl'
import { Form, Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';

import img1Slider2 from '../../../assets/Home/airplane/air-albania.png'
import img2Slider2 from '../../../assets/Home/airplane/wizz-air.png'
import img3Slider2 from '../../../assets/Home/airplane/qatar.png'
import img4Slider2 from '../../../assets/Home/airplane/turkish-airlines.png'

export const Data1 = [
    {
        img:img1Slider2,
        coloredDiv:<p className="red"><FormattedMessage id='developers' defaultMessage="Air Albania" /></p>,
        to1:'/'
    },
    {
        img:img2Slider2,
        coloredDiv:<p className="purple"><FormattedMessage id='working-remotely' defaultMessage="Wizz Air"/></p>,
        to1:'/'
    },
    {
        img:img3Slider2,
        coloredDiv:<p className="gray"><FormattedMessage id='startup-resouces' defaultMessage="Qatar Airways"/></p>,
        to1:'/'
    },
    {
        img:img4Slider2,
        coloredDiv:<p className="gray"><FormattedMessage id='startup-resouces' defaultMessage="Turkish Airlines"/></p>,
        to1:'/'
    }
    
]