import React from 'react';
import ProductCard from './ProductCard';
import { productsData } from './utils/Productdata'; // Importing product data

const Body = () => {
  return (
    <main className="bg-gradient-to-b from-orange-50 to-orange-100 min-h-screen">
      <section className="flex flex-col gap-6 px-4 py-6">
        {/* Search Bar */}
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-md px-4 py-2 text-sm text-gray-700 bg-white border border-gray-800 rounded-xl shadow-md placeholder-gray-400 focus:placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 ease-in-out hover:shadow-lg"
          />
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsData.map((item) => (
            <ProductCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Body;