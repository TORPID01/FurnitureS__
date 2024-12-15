import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-800">MacWood Furnitures</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <a href="#about" className="text-gray-600 hover:text-gray-900">About Us</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact <a>ph:- +91-9598899923 <br></br>em:- macwoodfurnitures@gmail.com</a></a>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8 py-3">
            <Link to="/?category=chair" className="text-gray-600 hover:text-gray-900">Chairs</Link>
            <Link to="/?category=table" className="text-gray-600 hover:text-gray-900">Tables</Link>
            <Link to="/?category=sofa" className="text-gray-600 hover:text-gray-900">Sofas</Link>
            <Link to="/?category=bed" className="text-gray-600 hover:text-gray-900">Beds</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}