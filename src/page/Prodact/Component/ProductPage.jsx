// src/components/ProductPage/ProductPage.jsx
import { useState } from 'react';
import CategorySidebar from '../Component/CategorySidebar';
import ProductGrid from '../Component/ProductGrid';
import { categories, products } from '../Component/productsData';
import styles from '../styles/ProductPage.module.css';

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Beauty & Cosmetics</h1>

      <div className={styles.layout}>
        <CategorySidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <main>
          <ProductGrid products={filteredProducts} />
        </main>
      </div>
    </div>
  );
};

export default ProductPage;