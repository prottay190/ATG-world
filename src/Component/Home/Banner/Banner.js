import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Banner.css';
// import bg from '../../../images/Rectangle 2.png'

const Banner = () => {
    return (
         <div className=''>
           <div className="banner-container">
               <Container>
               <div className='banner-text'>
                   <h2 >Computer Engineering</h2>
                   <p >142,765 Computer Enginerr follow this</p>
               </div>
               </Container>
           </div>
        </div>

    );
};

export default Banner;