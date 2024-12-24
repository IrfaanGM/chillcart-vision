import { Link } from "react-router-dom";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <span className="text-sm text-primary font-medium">{category}</span>
          <h3 className="text-lg font-semibold mt-1 text-gray-800">{name}</h3>
          <p className="text-lg font-bold text-primary mt-2">${price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;