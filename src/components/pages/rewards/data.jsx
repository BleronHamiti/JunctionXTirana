import { FormattedMessage } from "react-intl";
import img from "../../../assets/Home/airplane/wizz-air.png";
import re from "../../../assets/Home/re.png";
import silver from "../../../assets/Home/waves/wave2.png";
import gold from "../../../assets/Home/waves/wave3.png";
import platinium from "../../../assets/Home/waves/wave4.png";
import diamond from "../../../assets/Home/waves/wave5.png";
import emerald from "../../../assets/Home/waves/wave6.png";

const AcademyData = [
    {
        img:re,
        cls:'cls6',
        link:<FormattedMessage id='bronze' defaultMessage='Bronze' />,
        to:'/'
    },
    {
        img:re,
        cls:'cls6',
        link:<FormattedMessage id='silver' defaultMessage='Silver' />,
        to:'/'
    },
    {
        img:re,
        cls:'cls6',
        link:<FormattedMessage id='gold' defaultMessage='Gold' />,
        to:'/'
    },
    {
        img:re,
        cls:'cls6',
        link:<FormattedMessage id='platinum' defaultMessage='Platinum' />,
        to:'/'
    },
    {
        img:re,
        cls:'cls6',
        link:<FormattedMessage id='diamond' defaultMessage='Diamond' />,
        to:'/'
    },
    {
        img:re,
        cls:'cls6',
        link:<FormattedMessage id='emerald' defaultMessage='Emerald' />,
        to:'/'
    }
]

export default AcademyData;