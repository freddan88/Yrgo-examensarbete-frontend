import React, { useEffect, useContext } from 'react'
import { PaginationContext } from './PaginationContext';
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom';

const PageFooter = () => {

  const [ nextPage, setNextPage ] = useContext(PaginationContext);

  // eslint-disable-next-line
  const [ref, inView, entry] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if(inView){
      setNextPage(nextPage + 1);
    }
  // eslint-disable-next-line
  },[inView])

  return (
    <footer className="main-footer" ref={ref}>
      <div className="main-footer__column">
        <strong>Rubrik</strong>
        <ul>
          <li>-</li>
          <li>-</li>
          <li className="display-760px">
            <a href="https://www.google.com/maps/place/R%C3%96RMOSSEV%C3%84GEN+420,+442+49+Kung%C3%A4lv/@57.9006364,12.0232615,17z/data=!4m2!3m1!1s0x46455dfb12b1268d:0x3d81c12a5f9c52af?hl=sv"
            target="_blank" rel="noopener noreferrer">Karta</a>
          </li>
        </ul>
      </div>
      <div className="main-footer__column">
        <strong>Kontakt</strong>
        <ul>
          <li>Telefon:</li>
          <li>
            <Link onClick={() => window.scrollTo(0,0)} className="page-link" to="kontakt">Kontaktformulär</Link>
          </li>
        </ul>
      </div>
      <div className="main-footer__column">
        <strong>Information</strong>
        <ul>
          <li>Website</li>
          <li>
            Kod och design: <a href="http://www.leemann.se/fredrik/home"
            target="_blank" rel="noopener noreferrer">Fredrik Leemann</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default PageFooter;