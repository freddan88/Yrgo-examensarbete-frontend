import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PhotoLightbox = (props) => {

  const [ currentArrayIndex, setCurrentArrayIndex  ] = useState(props.index);
  const [ lightboxPhotos ] = useState(props.array.length);

  const handleClickNext = () => {
    setCurrentArrayIndex(currentArrayIndex + 1)
    if(currentArrayIndex === lightboxPhotos - 1){
      setCurrentArrayIndex(0);
    }
  }

  const handleClickPrev = () => {
    setCurrentArrayIndex(currentArrayIndex - 1)
    if(currentArrayIndex === 0){
      setCurrentArrayIndex(lightboxPhotos - 1);
    }
  }

  const currentArrayData = props.array[currentArrayIndex];

  return (
    <section className="lightbox-section">
      <div className="lightboxdiv" data-id={currentArrayData.id} >

        <header className="lightboxdiv__gallery-header">
          <strong>{currentArrayData.title ? currentArrayData.title : 'Fotot saknar titel'}</strong>
          <button className="close-button" onClick={props.toggle}>X</button>
        </header>

        <figure className="lightboxdiv__gallery-body">
            <img srcSet={`${currentArrayData.medium} 400w, ${currentArrayData.medium_large} 768w, ${currentArrayData.large} 800w`}
            src={currentArrayData.large} alt={currentArrayData.alt_text}/>
            <figcaption>{currentArrayData.caption ? currentArrayData.caption : 'Fotot saknar beskrivning'}</figcaption>
        </figure>

        <div className="lightboxdiv__arrow-container">
          <div className="prev-arrow arrow" onClick={handleClickPrev} />
          <div className="next-arrow arrow" onClick={handleClickNext} />
        </div>

      </div>
    </section>
  );
};

PhotoLightbox.propTypes = {
  array: PropTypes.array,
  index: PropTypes.number,
  toggle: PropTypes.func,
};

export default PhotoLightbox;