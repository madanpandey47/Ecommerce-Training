

export const productsData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1513708922415-7c0b60cc734e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    title: 'Product 1',
    description: 'This is a description of Product 1.',
    price: '10.00',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    title: 'Product 2',
    description: 'This is a description of Product 2.',
    price: '20.00',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    title: 'Product 3',
    description: 'This is a description of Product 3.',
    price: '30.00',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1512499617640-c2f9992f0c86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    title: 'Product 4',
    description: 'This is a description of Product 4.',
    price: '40.00',
  },
  // Add more products as needed
];

export const ProductImage = ({ image, title }) => (
  < img
    src={image}
    alt={title}
    className="w-32 h-32 object-cover rounded-md mb-4"
  />
);