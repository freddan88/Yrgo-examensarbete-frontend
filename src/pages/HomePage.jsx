import React from 'react';
import { Helmet } from "react-helmet";
// Start Importing components for this page
import PageBanner from './components/PageBanner';
import PageNavigation from './components/PageNavigation';

const HomePage = () => {

  return (
    <React.Fragment>
      <header className="main-header">
        <PageNavigation />
        <PageBanner isHome={ true } caption='Hem'/>
      </header>

      <main className="home-content">
        <Helmet>
          <title>Example | Hem</title>
          <meta name="description" content="Example Description - HomePage" />
          <meta name="keywords" content="Example,HomePage" />
          <link rel="canonical" href="/hem" />
        </Helmet>

        <div className="home-content__textbox">
          <h1>Välkommen!</h1>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque arcu dui, mattis quis risus eu, venenatis ultricies ligula.
            Nunc magna diam, ultricies at felis vel, ullamcorper viverra magna. Quisque tempor accumsan pharetra. Sed id ex in sem vulputate consequat.
            In pretium augue vitae est placerat varius.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor quis lacus eget semper. Maecenas lobortis consectetur tortor.
            Quisque posuere arcu sit amet magna tristique vulputate. Etiam eu efficitur justo, ac tristique lacus.</p>
        </div>

        <div className="home-content__placeholder">
          <a href="http://www.leemann.se/fredrik/home"
          target="_blank" rel="noopener noreferrer" className="caption-text">
            Link: Fredrik Leemann
          </a>
        </div>
      </main>
    </React.Fragment>
  );
};

export default HomePage;