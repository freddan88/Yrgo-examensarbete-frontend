import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { PaginationProvider } from './pages/components/PaginationContext';
// Start import pages
import HomePage from './pages/HomePage';
import PhotoPage from './pages/PhotoPage';
import ContactPage from './pages/ContactPage';
import BloggPage from './pages/BloggPage';
// Start import partials and resources
import PageFooter from './pages/components/PageFooter';
import logoDesktop from './images/logo_desktop.svg';

function App() {

  return (
  <div className="page-layout">
    <figure className="page-layout__logo">
      <img src={logoDesktop} alt="Rörmossens Humlegård - LOGO" />
    </figure>
    <PaginationProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/hem" exact component={HomePage}/>
        <Route path="/foton" exact component={PhotoPage}/>
        <Route path="/kontakt" exact component={ContactPage}/>
        <Route path="/blogg" exact component={BloggPage}/>
        <Route path="/">
          <Redirect to="/hem" />
        </Route>
      </Switch>
      <PageFooter />
    </BrowserRouter>
    </PaginationProvider>
  </div>
  );
}

export default App;