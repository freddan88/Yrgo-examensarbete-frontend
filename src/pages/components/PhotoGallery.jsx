import React, { useState } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import PropTypes from 'prop-types';
import PhotoLightbox from './PhotoLightbox';

const PhotoGallery = (props) => {

  const [ showLightbox, setShowLightbox ] = useState(false);
  const [ lightboxPhotosArray, setLightboxPhotosArray ] = useState([]);
  const [ lightboxPhotoIndex, setLightboxPhotoIndex ] = useState(0);

  const populateGalleryLightbox = (id, photos) => {
    setLightboxPhotosArray(photos)
    setLightboxPhotoIndex(id)
    toggleGalleryLightbox()
  }

  const toggleGalleryLightbox = () => {
    const targetElement = document.querySelector('body');

    if(showLightbox){
      enableBodyScroll(targetElement);
    } else {
      disableBodyScroll(targetElement);
    }
    setShowLightbox(!showLightbox)
  }

  return (
    <React.Fragment>
      {showLightbox && lightboxPhotosArray.length > 0 &&
        <PhotoLightbox
        index={lightboxPhotoIndex}
        array={lightboxPhotosArray}
        toggle={toggleGalleryLightbox} />
      }

      <div className="gallery" data-gallery-id={ props.gallery.id }>
        <div className="gallery__information">
          <strong>{ props.gallery.title ? props.gallery.title : 'Galleriet saknar titel' }</strong>
          <time>{ props.gallery.date }</time>
        </div>

        <div className="gallery__photoframe">
          {props.gallery.photos.small.map((object, index) => (
            <figure key={ index } data-id={object.id} onClick={() => populateGalleryLightbox(index,props.gallery.photos.big)}>
              <img src={ object.thumbnail } loading="lazy" width="250" height="250" alt={ object.alt_text }/>
              <figcaption>{ object.title ? object.title : 'Fotot saknar titel' }</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

PhotoGallery.propTypes = {
  gallery: PropTypes.object,
};

export default PhotoGallery;