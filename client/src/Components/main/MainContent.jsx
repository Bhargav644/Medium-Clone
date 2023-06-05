import React from 'react';
import Article from "../article/Article";
import Tag from '../tags/Tag.jsx';
import RecommendedArticles from "../recommended/RecommendedArticles";
import './MainContent.css';

function MainContent(props) {
  return (
    <main className="main-content">
      <Article title="Article Title" date="May 1, 2023" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla ut bibendum rhoncus, velit elit tincidunt velit, vel lacinia enim quam vitae lorem. Donec euismod, quam vel ultrices malesuada, quam odio bibendum augue, vel finibus enim enim vel sapien. Sed euismod, nulla ut bibendum rhoncus, velit elit tincidunt velit, vel lacinia enim quam vitae lorem. Donec euismod, quam vel ultrices malesuada, quam odio bibendum augue, vel finibus enim enim vel sapien." />
      <Tag tag="Technology" />
      <RecommendedArticles article1="Article 1" article2="Article 2" article3="Article 3" />
    </main>
  );
}

export default MainContent;