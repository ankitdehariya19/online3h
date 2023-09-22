import React from 'react';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import ProductCart from './components/ProductCart';
import Footer from './components/Footer';
import ImageGallery from './components/ImageGallery';

function App() {
  return (
    <div className="text-gray-600 p-4 w-full h-full">
      <div className="container mx-auto">
        <Navbar />

        <section className='w-full h-full flex flex-col lg:flex-row justify-between mt-10'>
          {/* Hide ProductDetails on mobile screens */}
          <div className='w-1/5 h-screen pt-10 hidden lg:flex'>
            <ProductDetails />
          </div>
          <div>
            <ImageGallery />
          </div>
          <div className='h-screen'>
            <ProductCart />
          </div>
        </section>
      </div>
      <div className='w-full flex justify-center mt-20'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
