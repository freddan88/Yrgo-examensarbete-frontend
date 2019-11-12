import React from 'react';
import PropTypes from 'prop-types';

const BloggPost = (props) => {

  return (
    <article className="bloggpost" data-post-id={props.post.id} >
      <header className="bloggpost__information">
        <strong>{props.post.title}</strong>
        <time>{props.post.date}</time>
      </header>
      <div className="bloggpost__body">
        <p dangerouslySetInnerHTML={{ __html: props.post.content}} />
      </div>
    </article>
  );
};

BloggPost.propTypes = {
  post: PropTypes.object,
};

export default BloggPost;