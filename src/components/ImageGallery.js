import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';

const ImageGallery = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: false,
  };

  return (
    <div className='h-full lg:flex lg:flex-col '>
      <div className='hidden lg:block'>
        <img src={image1} alt="Product 1" className="block w-50 h-auto" /> {/* Increase width here */}
        <div className='flex justify-between'>
          <img src={image4} alt="Product 4" className="block w-50 h-auto mt-4" /> {/* Increase width here */}
          <img src={image5} alt="Product 5" className="block w-50 h-auto mt-4" /> {/* Increase width here */}
        </div>
        <img src={image2} alt="Product 2" className="block w-50 h-auto mt-4" /> {/* Increase width here */}
        <img src={image3} alt="Product 3" className="block w-50 h-auto mt-4" /> {/* Increase width here */}
        <div className='w-full flex py-5 px-10 justify-between text-black underline'>
          <h3>Jonathan Simkhai</h3>
          <h3>Blazers</h3>
          <h3>Viscose</h3>
        </div>
      </div>
      <div className='lg:hidden'>
        <Slider {...settings}>
          <img src={image1} alt="Product 1" />
          <img src={image2} alt="Product 2" />
          <img src={image3} alt="Product 3" />
          <img src={image4} alt="Product 4" />
          <img src={image5} alt="Product 5" />
        </Slider>
      </div>
    </div>
  );
}

export default ImageGallery;
