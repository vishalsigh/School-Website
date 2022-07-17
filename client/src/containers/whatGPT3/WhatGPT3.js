import React from 'react';
import Feature from '../../components/feature/Feature';
import ReactReadMoreReadLess from 'react-read-more-read-less';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="About us" text="Buddha International School is a K-12 co-educational International Day School established in 2018, with a view to offering world-class educational opportunities in the State of Uttar Pradesh. The School is to be affiliated from CBSE (Central Board of Secondary Education) 
 
 In 2021, BIS was recognized as a Microsoft Showcase School, thus joining a select league of schools globally for their vision and innovation in teaching, learning, and preparing students for the future.
 
 The student body comprising about 1090 students, reflects the cultural diversity of India. Our teachers have rich experience at leading schools in India and across the world. The School has over 170 teachers including expatriates from different countries. With a teacher-student ratio of 1:6, the School is able to provide individualized attention to children.
 
 The School is recognized as India's premier international school, and is also among the top IB schools globally.
 " />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">A place where excellence meets success</h1>
    </div>


    <div className=" gpt3__readmore">
      <div className="gpt3__sidebar">
        <div className="gpt3__div"></div>
        <h3 className="gpt3__sidebarHeader">Our Vision</h3>
        <div className="gpt3__sidebarContent">
        <ReactReadMoreReadLess
          charLimit={200}
          readMoreText={"Read more "}
          readLessText={"Read less "}
        >
          Buddha International School will provide a complete and unique educational experience for the child, preparing the child for a successful life in the contemporary society. The vision of Buddha International School envisages
          To create an excellent educational institution synthesizing the human values with the highest quality of teaching–learning using modern technology-driven tools for preparing a well-rounded personality for our society.
          To shape global minds on the Indian soil, To ensure this, the school will give every student an access to world-class infrastructure, and an innovative curriculum that promotes the all-round development of the child imbibing traditional values.
        </ReactReadMoreReadLess>
        </div>
      </div>

      <div className="gpt3__sidebar">
      <div className="gpt3__div"></div>
        <h3 className="gpt3__sidebarHeader">Our Philosphy</h3>
        <div className="gpt3__sidebarContent">
        <ReactReadMoreReadLess
          charLimit={200}
          readMoreText={"Read more "}
          readLessText={"Read less "}
        >
          Every child is unique. It is a well-known fact that no two thumbprints are alike. In the same way, we believe that every child is born unique. Each child has a unique brain network that shapes how she absorbs and responds to stimuli. One way of teaching does not work for every child. We need to teach the way they learn, not force them to learn the way we teach. Education should foster real understanding: Understanding is different from acquiring information. Mere acquisition of information relies on memory, understanding relies on conceptual clarity. Schools are not assembly lines of syllabus and exams. We help children make meaning of life and develop the muscle to lead life effectively. For this, we go beyond academics to include life skills, values and habits. Real understanding comes from an integrated approach: We have a vision of the child we aim to graduate and everything in our schools is designed around that vision. Building design, pedagogy, teachers, curriculum content, activities and examinations – all are integrated to achieve this vision. A school is an eco-system where different factors have an effect on the child. Teachers, curriculum, assessments, environment, infrastructure, activities all come together to nurture the unique potential of the child.
        </ReactReadMoreReadLess>
        </div>
      </div>

      <div className="gpt3__sidebar">
      <div className="gpt3__div"></div>
        <h3 className="gpt3__sidebarHeader">Our Mission</h3>
        <div className="gpt3__sidebarContent">
        <ReactReadMoreReadLess 
          charLimit={200}
          readMoreText={"Read more "}
          readLessText={"Read less "}
        >
          Every child is like a seed which has the potential to grow if it is nourished with love and care under the right guidance. In the current challenging times, it is essential that children should not only excel in academics but should also develop courtesy, discipline, smart personality, social sensitivity and be imbibed with the traditional values and culture of our country. Childhood is the best time to lay the foundation of the core values essential for the overall development of the future citizen of tomorrow.
          Buddha international school is a friendly school where each and every student is understood, valued and attended too. Our students are provided with the state-of-the-art facilities like well-equipped science laboratory, computer laboratory and audio-visual room. Equal attention is given to the development of the children both academically and in extracurricular activities like different sports, yoga, cultural activities, etc.
          Year by year the efforts of all our staff and students have taken the school forward in terms of excellence. Today we stand as one of the noted educational landmarks in the heart of Narayanpur Mirzapur. We offer our students a stress-free learning environment which encourages creativity and critical thinking.
          At Buddha international School we are dedicated to exhaustive quality learning and are utterly committed to a continuous process of improvement for the benefit of the students. We are always open to refreshing views and suggestions which can add more value to the students of our school.
        </ReactReadMoreReadLess>
        </div>
      </div>

      
      {/* <Feature title="Our Vision" 
      text="Buddha International School will provide a complete and unique educational experience for the child, preparing the child for a successful life in the contemporary society. The vision of Buddha International School envisages."/>
      
      <Feature title="Our Philosphy" 
      text="Every child is unique. It is a well-known fact that no two thumbprints are alike. In the same way, we believe that every child is..."/>

      <Feature title="Our Mission" 
      text="Every child is like a seed which has the potential to grow if it is nourished with love and care under the right guidance. In the current challenging times, it is essential that children should not only excel in academics but should also develop courtesy, discipline, smart personality, social sensitivity and be imbibed with the traditional values and culture of our country. Childhood is the best time to lay the foundation of the core values essential for the overall development of the future citizen of tomorrow." /> */}
    
    </div>
  </div>
);

export default WhatGPT3;