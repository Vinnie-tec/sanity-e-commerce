import React from 'react';

const index = () => {
  return (
    <>
     HeroBanner 

     <div className='products-heading'>
      <h2>Beset Selling Products</h2>
      <p>Speakers of many variations</p>
     </div>

     <div className='products-container'>
      {['product1', 'product2'].map((product) => product)}
     </div>

     Footer
    </>
  );
}

export default index;
