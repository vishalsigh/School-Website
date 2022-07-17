import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Foundational',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Preparatory',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Middle',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Secondary',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Commit to excellence in education do not settle for anything less. </h1>
      <p>Proper education today will give you a proper future tomorrow.</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => ( 
        
       <Feature title={item.title} text={item.text} key={item.title + index} />

      ))}
    </div>
  </div>
);

export default Features;