import React from "react";
import "./rewards.scss";
import { FormattedMessage } from "react-intl";
import StyledLink from "../../shared/StyledLink/StyledLink";

const Rewards = () => {
  return (
    <div className="banner2">
      <div className="inner-banner-photo"></div>

      <div
        className="info"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h1>
          <FormattedMessage
            id="home-banner2-title"
            defaultMessage="Our Rewards"
          />
        </h1>
        <p>
          <FormattedMessage
            id="home-banner-text"
            defaultMessage="We present an array of enticing rewards awaiting your discovery, all of which can be unlocked as you embark on your journey through the skies by making reservations on our exclusive booking platform."
          />
        </p>
        <p className="p2">
          <FormattedMessage id="home-banner-text" defaultMessage="BRONZE" />
        </p>
        <p className="p2">
          <FormattedMessage id="home-banner-text" defaultMessage="SILVER" />
        </p>
        <p className="p2">
          <FormattedMessage id="home-banner-text" defaultMessage="GOLD" />
        </p>
        <p className="p2">
          <FormattedMessage id="home-banner-text" defaultMessage="PLATINUM" />
        </p>
        <p className="p2">
          <FormattedMessage id="home-banner-text" defaultMessage="DIAMOND" />
        </p>
        <p className="p2">
          <FormattedMessage id="home-banner-text" defaultMessage="EMERALD" />
        </p>

        {/* <div className="links">
          <StyledLink
            to="/"
            link={
              <FormattedMessage
                id="About-Us"
                defaultMessage="About Us"
              />
            }
          />
          
        </div> */}
      </div>
    </div>    
  );
};

export default Rewards;
