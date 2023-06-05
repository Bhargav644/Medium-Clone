import React from 'react';
import './Article.css';

function Article(props) {
  return (
    <article className="article">
      <div className="article-header">
        <h2>{props.title}</h2>
        <p>{props.date}</p>
      </div>
      <div className="article-content">
        <p>{props.content}</p>
      </div>
      <div className="article-footer">
        <ul>
          <li><a href="#">Read More</a></li>
          <li><a href="#">Bookmark</a></li>
          <li><a href="#">Share</a></li>
        </ul>
      </div>
    </article>
  );
}

export default Article;