import React from 'react';
import possibilityImage from '../../assets/princi.jpg';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Your Bright Future Will Start Here</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Allow children to live their dreams. Buddha International School is the place which will give yours dreams a platform to shape it and give them the push to come true. We know that every kid is unique so we help them to explore themselves.</p>
      <h4>Your Bright Future Will Start Here</h4>
    </div>
  </div>
);

export default Possibility;