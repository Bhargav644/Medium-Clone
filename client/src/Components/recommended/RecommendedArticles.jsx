import React from 'react';
import './RecommendedArticles.css';

function RecommendedArticles(props) {
  return (
    <div className="recommended-articles">
      <h3>Recommended Articles</h3>
      <ul>
        <li><a href="#">{props.article1}</a></li>
        <li><a href="#">{props.article2}</a></li>
        <li><a href="#">{props.article3}</a></li>
      </ul>
    </div>
  );
}

export default RecommendedArticles;