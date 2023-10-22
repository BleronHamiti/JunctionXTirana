import React from "react";
import { FormattedMessage } from "react-intl";
import "./styles/banner.scss";
const Banner = () => {
  return (
    <div className='banner'>
            <div className="main">
                <h1>
                    <FormattedMessage id='home-banner-title' 
                    defaultMessage='Travel without limits'/>
                </h1>
                <p>
                    <FormattedMessage id='home-banner-text' 
                    defaultMessage='SkySavers, are dedicated to making air travel easier for you. They excel at securing the best deals and guiding you through complex itineraries.'/>
                </p>
            </div>
    </div>
  );
};
export default Banner;
