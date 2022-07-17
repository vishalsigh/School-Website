import React from 'react';
// import people from '../../assets/room.jpeg';
import ai from '../../assets/school.jpg';
// import '../../assets/bootstrap.min.css'
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">BUDDHA INTERNATIONAL SCHOOL</h1>
      <p>Education is not a safety net. It is the rocket that will propel you towards success. All you have to do is have an aim and work on everything that takes to get a lift-off.</p>

      <div className="gpt3__header-content__input">
        {/* <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button> */}
        <h4 className="gpt3__header-content__input_h5">        I have always dreamt of having such a school where only STUDY is not the method , but LEARN is also important. My aspiration was to create an atmosphere of education which is for everyone and can be accessible to everyone. No barring of society can stop it. The purpose of education is not simply to acquire degrees. It is to mold the impressionable minds of our young generation in the right direction. Our children are the future citizens of tomorrow. 
          Hence, I strive to travel beyond the boundaries of mere books. I have realized that the future is abstract and unknown but the youth in our hands are real and can be moulded.
          They have the power to take our country to great heights of success. Hence, it is essential that we train them to overcome their personal inhibitions and prejudices and unite as an indomitable force. Only then we can visualize a society that is free from corruption, intolerance and conflicts.
        </h4>
      </div>

      <div className="gpt3__header-content__people">
        {/* <img src={people} /> */}
        <p>Best Wishes, <br/>
           Late. Dr. Nagendra Prasad Singh
        </p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt="img" />
    </div>


{/* <div className="gpt3__header-image">
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={ai} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={people} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={ai} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div> */}
  </div>
);

export default Header;