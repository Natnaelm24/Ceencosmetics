// src/components/ShopNow/ShopNowPage.jsx
import { useCart } from '../../../component/ProductCard/CartContext';
import { Link } from 'react-router-dom';
import styles from '../Styling/ShopNowPage.module.css';

const ShopNowPage = () => {
  const { cartItems, updateQuantity, removeFromCart, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className={styles.empty}>
        <h2>Your bag is empty</h2>
        <p>Time to treat yourself to something beautiful!</p>
        <Link to="/" className={styles.shopLink}>Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Beauty Bag</h1>

      <div className={styles.cartGrid}>
        <div className={styles.items}>
          {cartItems.map(item => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.name} className={styles.productImg} />

              <div className={styles.details}>
                <h3>{item.name}</h3>

                {/* Real description from productsData */}
                <p className={styles.description}>
                  {item.description || 'Luxurious beauty essential crafted with premium ingredients.'}
                </p>

                <div className={styles.priceQty}>
                  <p className={styles.price}>${item.price}.00</p>

                  <div className={styles.quantity}>
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>

                <p className={styles.lineTotal}>
                  Item Total: <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                </p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className={styles.remove}
                aria-label="Remove item"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className={styles.summary}>
          <h2>Order Summary</h2>
          <div className={styles.row}>
            <span>Subtotal ({cartItems.reduce((sum, i) => sum + i.quantity, 0)} items)</span>
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>
          <div className={styles.row}>
            <span>Shipping</span>
            <span className={styles.free}>Free</span>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.total}>
            <span>Total</span>
            <strong className={styles.grandTotal}>${totalPrice.toFixed(2)}</strong>
          </div>

          <button className={styles.checkout}>Proceed to Checkout</button>
          <Link to="/" className={styles.continue}>Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default ShopNowPage;