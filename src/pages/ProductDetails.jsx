import { useParams } from 'react-router-dom';
import { products } from '../data/products';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-2xl text-gray-700 mt-4">₹{product.price}</p>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="mt-2 text-gray-600">{product.description}</p>
          </div>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Dimensions</h2>
            <ul className="mt-2 space-y-2">
              <li>Width: {product.dimensions.width}</li>
              <li>Depth: {product.dimensions.depth}</li>
              <li>Height: {product.dimensions.height}</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Materials</h2>
            <ul className="mt-2 list-disc list-inside">
              {product.materials.map((material, index) => (
                <li key={index}>{material}</li>
              ))}
            </ul>
          </div>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Available Colors</h2>
            <div className="mt-2 flex gap-2">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}