// src/components/ProductPage/ProductGrid.jsx
import ProductCard from '../Component/ProductCard';
import styles from '../styles/ProductPage.module.css';

const ProductGrid = ({ products }) => {
  return (
    <div className={styles.productGrid}>
      {products.length > 0 ? (
        products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className={styles.noProducts}>No products found in this category.</p>
      )}
    </div>
  );
};

export default ProductGrid;