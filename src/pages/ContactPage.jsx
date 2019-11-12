import React from 'react';
import { Helmet } from "react-helmet";
// Start Importing components for this page
import PageBanner from './components/PageBanner';
import ContactForm from './components/ContactForm';
import PageNavigation from './components/PageNavigation';

const ContactPage = () => {

  return (
    <React.Fragment>
      <header className="main-header">
        <PageNavigation />
        <PageBanner isHome={ false } caption='Example kontaktformuläret'/>
      </header>

      <main className="page-content contact-content">
        <Helmet>
          <title>Example | Kontakt</title>
          <meta name="description" content="Example Description - ContactPage" />
          <meta name="keywords" content="Example,ContactPage" />
          <link rel="canonical" href="/kontakt" />
        </Helmet>

        <div className="content-box main-content-box">
          <ContactForm />
        </div>

        <aside className="content-box content-sidebar">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15294.273535069824!2d12.01048415413397!3d57.89878711783146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46455dfb12b1268d%3A0x3d81c12a5f9c52af!2zUsOWUk1PU1NFVsOER0VOIDQyMCwgNDQyIDQ5IEt1bmfDpGx2!5e0!3m2!1ssv!2sse!4v1571324463898!5m2!1ssv!2sse"
            width="100%" height="100%" frameBorder="0" style={{ border: 0 }} allowFullScreen="" title="Google Maps: Rörmossens humlegård">
          </iframe>
        </aside>
      </main>
    </React.Fragment>
  );
};

export default ContactPage;