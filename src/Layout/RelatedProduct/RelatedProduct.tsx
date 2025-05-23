import { FC, memo, useEffect, useState } from 'react';
import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { db } from '../../config/firebase.config';
import { IProducts } from '../../types/productsType';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductCard } from '../../components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './RelatedProduct.css';

import { Pagination } from 'swiper';
interface IProps {
  category: string;
  currentProductId: string;
}
const RelatedProduct: FC<IProps> = ({ category, currentProductId }) => {
  const [relatedProduct, setRelatedProduct] = useState<IProducts[]>([]);
  useEffect(() => {
    (async () => {
      const data: any[] = [];
      const productRef = collection(db, 'products');
      const quryRef = query(productRef, where('category', '==', category), limit(12));
      const snapShot = await getDocs(quryRef);
      snapShot.forEach((chunk) => {
        data.push(chunk.data());
      });
      const productData: IProducts[] = data.filter((product) => product.id !== currentProductId);
      setRelatedProduct(productData);
    })();
  }, [category, currentProductId]);
  return (
    <div className='related-product'>
      <Swiper
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={0}
        modules={[Pagination]}
        breakpoints={{ 950: { slidesPerView: 3 }, 650: { slidesPerView: 2 } }}
        navigation
        lazy
      >
        {relatedProduct.map((product, i) => (
          <SwiperSlide key={i}>
            <ProductCard productData={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(RelatedProduct);
