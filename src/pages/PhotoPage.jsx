import React, { useState, useEffect, useContext } from 'react';
import { PaginationContext } from './components/PaginationContext';
import { Helmet } from "react-helmet";
import axios from 'axios';
// Start Importing components for this page
import PageBanner from './components/PageBanner';
import PhotoGallery from './components/PhotoGallery';
import PageNavigation from './components/PageNavigation';
import FilterCalendar from './components/FilterCalendar';

const PhotoPage = () => {

  const [ postsPerPage ] = useState(4); // Config
  const [ isLoading, setIsLoading ] = useState(true);
  const [ currentYear, setCurrentYear ] = useState(0);
  const [ showCalendar, setShowCalendar ] = useState(false);
  const [ showScrollIcon, setShowScrollIcon ] = useState(false);
  const [ nextPage, setNextPage ] = useContext(PaginationContext);
  const [ allPublishedGalleries, setAllPublishedGalleries ] = useState([]);
  const [ publishedGalleriesPerYear, setPublishedGalleriesPerYear ] = useState([]);
  const [ publishedGalleriesPerMonth, setPublishedGalleriesPerMonth ] = useState([]);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShowScrollIcon(true);
    } else {
      setShowScrollIcon(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll);
    getPublishedGalleriesPerYear();
    getAllPublishedGalleries();
    // eslint-disable-next-line
  },[nextPage]);

  const getPublishedGalleriesPerYear = async () => {
    if (nextPage === 1) {
      const url = `${process.env.REACT_APP_API_ROOT}/photo/year`;
      const res = await axios.get(url);
      setPublishedGalleriesPerYear(res.data)
      // Debug and log to se if function is running
      // console.log('- getPublishedGalleriesPerYear -');
      // console.log(url);
    }
  }

  const getPublishedGalleriesPerMonth = async (year) => {
    const url = `${process.env.REACT_APP_API_ROOT}/photo/month?year=${year}`;
    const res = await axios.get(url);
    setPublishedGalleriesPerMonth(res.data);
    // Debug and log to se if function is running
    // console.log('- getPublishedGalleriesPerMonth -');
    // console.log(url);
  }

  const getAllPublishedGalleries = async () => {
    if (nextPage > 1) {
      const url = `${process.env.REACT_APP_API_ROOT}/photo?per_page=${postsPerPage}&page=${nextPage}&year=${currentYear}`;
      const res = await axios.get(url);
      // Update state if array contains data and is array
      if (Array.isArray(res.data) && res.data.length > 0) {
        setAllPublishedGalleries(allPublishedGalleries.concat(res.data));
        setIsLoading(false);
        // Debug and log to se if function is running
        // console.log('- getAllPublishedGalleries -');
        // console.log(url);
      }
    } else if (nextPage === 1) {
      getSelectedYearPublishedGalleries(currentYear)
    }
  }

  const getSelectedYearPublishedGalleries = async (year) => {
    const url = `${process.env.REACT_APP_API_ROOT}/photo?per_page=${postsPerPage}&page=1&year=${year}`;
    const res = await axios.get(url);
    setAllPublishedGalleries(res.data);
    setIsLoading(false);
    setCurrentYear(year);
    setNextPage(1);
    // Debug and log to se if function is running
    // console.log('- getSelectedYearPublishedGalleries -');
    // console.log(url);
  }

  const selectCurrentYear = (e) => {
    const year = e.target.value;

    if (year !== '0') {
      setShowCalendar(true);
    } else {
      setShowCalendar(false);
    }

    window.scrollTo(0,0);
    setIsLoading(true);
    getPublishedGalleriesPerMonth(year);
    getSelectedYearPublishedGalleries(year);
  }

  return (
    <React.Fragment>
    <header className="main-header">
      <PageNavigation />
      <PageBanner isHome={false} caption='Example fotogallerier'/>
    </header>

      <main className="page-content photo-content" >
        <Helmet>
          <title>Example | Foton</title>
          <meta name="description" content="Example Description - PhotoPage" />
          <meta name="keywords" content="Example,PhotoPage" />
          <link rel="canonical" href="/foton" />
        </Helmet>

        <div className="content-box main-content-box">
        {
          isLoading ? <h4 style={{textAlign: 'center'}}>Loading...</h4> :
          allPublishedGalleries.map((object, index) => (
            <PhotoGallery key={index} gallery={object} />
          ))
        }
        </div>

        <aside className="content-box content-sidebar">
          { showScrollIcon && <div className="scroll-top-icon" onClick={() => window.scrollTo(0,0)}/> }
          <div className="option-box">
            <label htmlFor="options-photo">Filtrera per år</label>
            <select id="options-photo" className="filter-select" value={currentYear} onChange={selectCurrentYear}>
                <option value='0'>Visa alla</option>
                {
                  publishedGalleriesPerYear.map((object,index) => (
                    <option key={index} value={object.year}>
                      {object.year} : {object.published} Publicerad(e)
                    </option>
                  ))
                }
            </select>
          </div>
          { showCalendar && Array.isArray(publishedGalleriesPerMonth) && <FilterCalendar objects={publishedGalleriesPerMonth}/> }
        </aside>
      </main>
    </React.Fragment>
  );
};

export default PhotoPage;
