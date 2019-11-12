import React, { useState, useEffect, useContext } from 'react';
import { PaginationContext } from './components/PaginationContext';
import { Helmet } from "react-helmet";
import axios from 'axios';
// Start Importing components for this page
import BloggPost from './components/BloggPost';
import PageBanner from './components/PageBanner';
import PageNavigation from './components/PageNavigation';
import FilterCalendar from './components/FilterCalendar';

const BloggPage = () => {

  const [ postsPerPage ] = useState(6); // Config
  const [ isLoading, setIsLoading ] = useState(true);
  const [ currentYear, setCurrentYear ] = useState(0);
  const [ showCalendar, setShowCalendar ] = useState(false);
  const [ showScrollIcon, setShowScrollIcon ] = useState(false);
  const [ nextPage, setNextPage ] = useContext(PaginationContext);
  const [ publishedPostsPerMonth, setPublishedPostsPerMonth ] = useState([]);
  const [ publishedPostsPerYear, setPublishedPostsPerYear ] = useState([]);
  const [ allPublishedPosts, setAllPublishedPosts ] = useState([]);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShowScrollIcon(true);
    } else {
      setShowScrollIcon(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll);
    getPublishedPostsPerYear();
    getAllPublishedPosts();
    // eslint-disable-next-line
  },[nextPage]);

  const getPublishedPostsPerYear = async () => {
    if (nextPage === 1) {
      const url = `${process.env.REACT_APP_API_ROOT}/blogg/year`;
      const res = await axios.get(url);
      setPublishedPostsPerYear(res.data)
      // Debug and log to se if function is running
      // console.log('- getPublishedPostsPerYear -');
      // console.log(url);
    }
  }

  const getPublishedPostsPerMonth = async (year) => {
    const url = `${process.env.REACT_APP_API_ROOT}/blogg/month?year=${year}`;
    const res = await axios.get(url);
    setPublishedPostsPerMonth(res.data);
    // Debug and log to se if function is running
    // console.log('- getPublishedPostsPerMonth -');
    // console.log(url);
  }

  const getAllPublishedPosts = async () => {
    if (nextPage > 1) {
      const url = `${process.env.REACT_APP_API_ROOT}/blogg?per_page=${postsPerPage}&page=${nextPage}&year=${currentYear}`;
      const res = await axios.get(url);
      // Update state if array contains data and is array
      if (Array.isArray(res.data) && res.data.length > 0) {
        setAllPublishedPosts(allPublishedPosts.concat(res.data));
        setIsLoading(false);
        // Debug and log to se if function is running
        // console.log('- getAllPublishedPosts -');
        // console.log(url);
      }
    } else if (nextPage === 1) {
      getSelectedYearPublishedPosts(currentYear)
    }
  }

  const getSelectedYearPublishedPosts = async (year) => {
    const url = `${process.env.REACT_APP_API_ROOT}/blogg?per_page=${postsPerPage}&page=1&year=${year}`;
    const res = await axios.get(url);
    setAllPublishedPosts(res.data);
    setIsLoading(false);
    setCurrentYear(year);
    setNextPage(1);
    // Debug and log to se if function is running
    // console.log('- getSelectedYearPublishedPosts -');
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
    getPublishedPostsPerMonth(year);
    getSelectedYearPublishedPosts(year);
  }

  return (
    <React.Fragment>
    <header className="main-header">
      <PageNavigation />
      <PageBanner isHome={false} caption='Example blogginlägg'/>
    </header>

      <main className="page-content photo-content" >
        <Helmet>
          <title>Example | Blogg</title>
          <meta name="description" content="Example Description - BloggPage" />
          <meta name="keywords" content="Example,BloggPage" />
          <link rel="canonical" href="/blogg" />
        </Helmet>

        <div className="content-box main-content-box">
        {
          isLoading ? <h4 style={{textAlign: 'center'}}>Loading...</h4> :
          allPublishedPosts.map((object, index) => (
            <BloggPost key={index} post={object} />
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
                  publishedPostsPerYear.map((object,index) => (
                    <option key={index} value={object.year}>
                      {object.year} : {object.published} Publiserad(e)
                    </option>
                  ))
                }
            </select>
          </div>
          { showCalendar && Array.isArray(publishedPostsPerMonth) && <FilterCalendar objects={publishedPostsPerMonth}/> }
        </aside>
      </main>
    </React.Fragment>
  );
};

export default BloggPage;