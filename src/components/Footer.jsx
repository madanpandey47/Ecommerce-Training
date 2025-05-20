import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">E-Commerce</h3>
            <p className="text-gray-400">Your one-stop shop for all your needs.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-gray-400">
              <li>Email: info@shophub.com</li>
              <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Shopping St</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-4 pt-3 text-center text-gray-400">
          <p>&copy; 2024 ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  