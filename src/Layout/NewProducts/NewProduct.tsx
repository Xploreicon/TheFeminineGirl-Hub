import { useEffect, useState } from 'react';
import { collection, getDocs, limit, query } from 'firebase/firestore';
import { db } from '../../config/firebase.config';
import { IProducts } from '../../types/productsType';
import { Button, Loader, ProductCard } from '../../components';
import './NewProduct.css';
import { useNavigate } from 'react-router-dom';

const NewProduct: React.FC = () => {
  const [products, setProducts] = useState<IProducts[] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    const allProducts: any[] = [];
    (async () => {
      const querySnap = query(collection(db, 'products'), limit(6));
      const snapShot = await getDocs(querySnap);
      snapShot.forEach((doc) => {
        const data = doc.data();
        if (data && data.id && data.price && data.imageUrls) { // Basic validation
          allProducts.push(data);
        } else {
          console.warn(`Incomplete product data:`, data); // Log incomplete data
        }
      });
      setProducts(allProducts);
      setLoading(false);
    })();
  }, []);
  

  return (
    <div className='new-product'>
      <div className='new-product__head-title'>
        <span className='head-title__notic'>Hurry up</span>
        <h2 className='head-title__main'>New Arrivals</h2>
        <p className='head-title__des'>Place orders for newly arrived deals in store.</p>
      </div>
      {loading && <Loader />}
      <div className='new-product__wrapper'>
        {products.map((product: IProducts) => (
         <ProductCard key={Number(product.id)} productData={product} />
        ))}
      </div>
      <div className='new-product__button-wrapper'>
        <Button onClick={() => navigate('/shop')}>Go To Shop</Button>
      </div>
    </div>
  );
};

export default NewProduct;
