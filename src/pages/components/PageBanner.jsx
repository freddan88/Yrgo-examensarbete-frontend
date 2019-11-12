import React from 'react';
import PropTypes from 'prop-types';
import BannerImg from '../../images/rhg_banner1.jpg';

const PageBanner = (props) => {

  if (props.isHome) {
    return(
      <div className="page-banner page-banner--expanded">
        <img src={ BannerImg } alt="Rörmossens Humlegård default banner"/>
      </div>
    );
  } else {
    return(
      <div className="page-banner page-banner--bar">
        <h1>{ props.caption }</h1>
      </div>
    );
  }
};

PageBanner.propTypes = {
  isHome: PropTypes.bool,
  caption: PropTypes.string,
};

export default PageBanner;