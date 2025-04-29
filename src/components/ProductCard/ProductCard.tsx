import { BiGitCompare, BiSearch, BiHeart } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/Cart/CartContext";
import { IProducts } from "../../types/productsType";
import "./ProductCard.css";

interface Props {
  productData: IProducts;
}

const ProductCard: React.FC<Props> = ({ productData }) => {
  const { addToCart } = useCartContext();
  const navigate = useNavigate();

  if (!productData) {
    console.error("Product data is missing or undefined.");
    return null; // Skip rendering if product data is invalid
  }

  // Calculate discount price, fallback to original price if discountPercent is invalid
  const discountPrice = (
    productData.price -
    (productData.price * (productData.discountPercent || 0)) / 100
  ).toFixed(2);

  const handleOpenProduct = (): void => {
    navigate(`/shop/${productData.id}`);
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    addToCart(productData, 1);
  };

  return (
    <div onClick={handleOpenProduct} className="product-card">
      {/* Discount Badge */}
      {productData.discountPercent > 0 && (
        <div className="product-card__discount-percent">
          -{productData.discountPercent}%
        </div>
      )}

      {/* Product Tools */}
      <div className="product-card__tools">
        <button className="product-card__tools-tool">
          <BiGitCompare size={20} />
          <span className="product-card__tools-tool__info">Compare</span>
        </button>
        <button className="product-card__tools-tool">
          <BiSearch size={20} />
          <span className="product-card__tools-tool__info">Quick Review</span>
        </button>
        <button className="product-card__tools-tool">
          <BiHeart size={20} />
          <span className="product-card__tools-tool__info">Add to Favourites</span>
        </button>
      </div>

      {/* Product Image */}
      <div className="product-card__image">
        {productData.imageUrls && productData.imageUrls.length > 0 ? (
          <img
            className="product-card__image-image"
            loading="lazy"
            src={productData.imageUrls[0]}
            alt={productData.name || "Unnamed Product"}
          />
        ) : (
          <div className="product-card__placeholder">No Image Available</div>
        )}
        <button
          disabled={!productData.inStock}
          onClick={handleAddToCart}
          className="add-to-cart"
        >
          <h2>{productData.inStock ? "ADD TO CART" : "OUT OF STOCK"}</h2>
        </button>
      </div>

      {/* Product Content */}
      <div className="product-card__content">
        <h4 className="product-card__name">{productData.name || "Unnamed Product"}</h4>
        <div className="product-card__content__price">
          {productData.discountPercent > 0 && (
            <del className="product-card__regular-price">{productData.price}</del>
          )}
          <span className="product-card__discount-price">{discountPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
