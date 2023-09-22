import React, { useState } from 'react';
import { Link } from 'react-scroll';

function ProductDetails() {
  const [activeTab, setActiveTab] = useState('details');

  const productDescription = `The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. It has a straight fit with well-defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel.`;

  const tabs = [
    { id: 'details', label: 'Details', content: productDescription },
    { id: 'delivery', label: 'Delivery', content: 'Delivery information goes here.' },
    { id: 'fit', label: 'Fit', content: 'Fit information goes here.' },
    { id: 'share', label: 'Share', content: 'Sharing options go here.' },
  ];

  const editorNote = `Editor's Note: This is an editor's note about the product.`;
  const designerInfo = `Designer Info: Learn more about the designer of this product.`;

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const addToCart = () => {
    // Implement the functionality to add this product to the cart here
    console.log('Product added to cart');
  };

  return (
    <div>
      <div className="space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`text-gray-400 ${activeTab === tab.id ? 'border-b-2 border-white' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.map((tab) => (
          <div key={tab.id} style={{ display: activeTab === tab.id ? 'block' : 'none' }}>
            <h2>{tab.label}</h2>
            <p>{tab.content}</p>
            {tab.id === 'details' && (
              <>
                <Link href="#">{editorNote}</Link>
                <br />
                <Link href="#">{designerInfo}</Link>
                <button onClick={addToCart} className=" text-black px-4 py-2 mt-4">
                  Add to Cart
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetails;
