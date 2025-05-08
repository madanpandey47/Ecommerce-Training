import React from 'react';

const ProductCard = (props) => {
  return (
    <div className='flex flex-col gap-4 px-3 border-2 border-slate-600 w-72'>
      <img
        src={props.image}
        alt=''
      />
      <h2 className='text-2xl'>{props.title}</h2>
      <p>
        {props.description}
      </p>
      <h3 className='text-2xl'>{props.price}</h3>
      <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300'>
        Add to Cart
      </button> 
      <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300'>
        Buy Now
      </button> 
    </div>
  );
};

export default ProductCard;