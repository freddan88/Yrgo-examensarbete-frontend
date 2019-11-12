import React, { useState, useEffect, useContext } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { PaginationContext } from './PaginationContext';
import { Link } from 'react-router-dom';
import logoMobile from '../../images/logo_mobile.svg';
import barsMobile from '../../images/bars-solid.svg';

const PageNavigation = () => {

  const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);
  const [ currentPath, setCurrentPath ] = useState('');
  const targetElement = document.querySelector('body');
  // eslint-disable-next-line
  const [ nextPage, setNextPage ] = useContext(PaginationContext);

  useEffect(() => {
    setNextPage(1);
    setCurrentPath(window.location.pathname);
    enableBodyScroll(targetElement);
    // eslint-disable-next-line
  },[targetElement]);

  const mobileMenuToggle = (targetElement) => {
    if(mobileMenuOpen){
      enableBodyScroll(targetElement);
    } else {
      disableBodyScroll(targetElement);
    }
    setMobileMenuOpen(!mobileMenuOpen);
  }

  const navigationLinks = ['hem','foton','kontakt','blogg'];

  return (
    <React.Fragment>
      <div className="display-560px mobile-menu-toggle-icon" onClick={() => mobileMenuToggle(targetElement)}>
        <img src={barsMobile} alt="Hamburgarmeny - Font Awesome (Bars - Solid Style - fas)"/>
        <small>Meny</small>
      </div>
      <nav className={`main-navigation ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <ul>
          <div className="display-560px">
            <img src={logoMobile} alt="Rörmossens Humlegård - LOGO" />
          </div>
          {navigationLinks.map(( link, index ) => (
          <li className="main-navigation__link" key={ index }>
            <Link className={ currentPath === `/${ link }` ? 'active' : '' } to={ link }>{ link }</Link>
          </li>
          ))}
          <strong className="display-560px mobile-menu-close-link" onClick={() => mobileMenuToggle(targetElement)}>Stäng Meny</strong>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default PageNavigation;