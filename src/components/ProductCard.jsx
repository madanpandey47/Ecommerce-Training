import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ image, title, description, price }) => {
  // Truncate description if it's too long
  const truncatedDescription = description?.length > 100 
    ? `${description.substring(0, 100)}...` 
    : description;

  return (
    <div className="bg-white/80 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="relative">
        <img
          src={image || "https://via.placeholder.com/150"}
          alt={title || "Product Image"}
          className="w-full h-48 object-contain p-4"
        />
        <div className="absolute top-2 right-2">
          <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-all duration-300 ease-in-out hover:scale-110">
            <span className="text-gray-600 hover:text-red-500 transition-colors duration-300">♥</span>
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">{title || "No Title"}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{truncatedDescription || "No description available."}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">
            {price ? `$${price.toFixed(2)}` : "Price not available"}
          </span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ProductCard.defaultProps = {
  image: "https://via.placeholder.com/150",
  title: "Product Title",
  description: "This is a sample product description.",
  price: "N/A"
};

export default ProductCard;