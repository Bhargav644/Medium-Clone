import React from 'react';
import './Tag.css';

function Tag(props) {
  return (
    <div className="tag">
      <a href="#">{props.tag}</a>
    </div>
  );
}

export default Tag;