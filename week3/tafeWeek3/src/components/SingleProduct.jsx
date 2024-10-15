import { useParams } from 'react-router-dom';
import data from '../data';


export default function SingleProduct() {
    const { id } = useParams();
    const product = data.find(p => p.id === parseInt(id));
    console.log(product);
    if (!product) return <div>Product not found</div>;

  return (
    <div>
        <h1>{product.name}</h1>
        <p>Product ID: {product.id}</p>
        <p>{product.description}</p>
        <p className="price">{product.price}</p>
    </div>
   
  )
}
