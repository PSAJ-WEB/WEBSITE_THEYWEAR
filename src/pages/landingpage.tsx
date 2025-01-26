import { Component, createSignal, For } from 'solid-js';
import logo from '../img/logo.png';
import model from '../img/model1.png';
import model1 from '../img/model2.png';
import model2 from '../img/model3.png';
import model3 from '../img/model4.png';
import model4 from '../img/model5.png';
import styles from './landingpage.module.css';

const LandingPage: Component = () => {
  const [bestSellers] = createSignal([
    {
      image: model1,
      title: ' 1',
      price: '$218'
    },
    {
      image: model2,
      title: ' 2',
      price: '$99'
    },
    {
      image: model3,
      title: ' 3',
      price: '$118'
    },
    {
      image: model4,
      title: ' 4',
      price: '$79'
    },
    {
      image: model1,
      title: ' 5',
      price: '$108'
    },
    {
      image: model1,
      title: ' 5',
      price: '$108'
    },
    {
      image: model1,
      title: ' 5',
      price: '$108'
    }
  ]);


  return (
    <div class={styles.container}>
      <header class={styles.header}>
        <nav class={styles.navbar}>
          <div class={styles.navLeft}>
            <div class={styles.navLink}>NEW ARRIVALS</div>
            <div class={styles.navLink}>SHOP</div>
            <div class={styles.navLink}>ABOUT</div>
            <div class={styles.navLink}>VIDEO</div>
            <div class={styles.navLink}>BLOG</div>
          </div>
          <img src={logo} alt="Logo" class={styles.logo} />
          <div class={styles.navRight}>
            <div class={styles.navLink}>ACCOUNT</div>
            <div class={styles.navLink}>CART</div>
          </div>
        </nav>


      </header>
      <section class={styles.first}>
        <div class={styles.contentLeft}>
          <h1 class={styles.titlefirst}>
            Crafted to seamlessly<br />
            blend <span class={styles.italic}>fashion</span><br />
            with <span class={styles.italic}>function</span>.
          </h1>
          <button class={styles.shopButton}>SHOP NEW ARRIVALS</button>
        </div>

        <div class={styles.contentRight}>
          <div class={styles.imageWrapper}>
            <img src={model} alt="Fashion" class={styles.image} />
          </div>
        </div>
      </section>

      <section class={styles.bestSellers}>
        <h2 class={styles.titletwo}>This Season's Best Sellers</h2>
        <div class={styles.productGridWrapper}>
          <div class={styles.productGrid}>
            <For each={bestSellers()}>{(product) =>
              <div class={styles.productCard}>
                <div class={styles.productImageWrapper}>
                  <img src={product.image} alt={product.title} class={styles.productImage} />
                </div>
                <div class={styles.productInfo}>
                  <h3 class={styles.productTitle}>{product.title}</h3>
                  <p class={styles.productPrice}>{product.price}</p>
                </div>
              </div>
            }</For>
          </div>
        </div>

      </section>
      <section class={styles.brandValues}>
        <h2 class={styles.sectionTitle}>Style. <br />Technical. <br /> Innovative.</h2>
        <p class={styles.shopText}>Shop Active Wear</p>
      </section>
      <div class={styles.brandGrid}>
        <div class={styles.brandItem}>
          <p class={styles.brandCaption}>
            LOOK BETTER. WEAR COMFORTABLE. ACTIVE WEAR. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            LOOK BETTER. WEAR COMFORTABLE. ACTIVE WEAR. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            LOOK BETTER. WEAR COMFORTABLE. ACTIVE WEAR. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            LOOK BETTER. WEAR COMFORTABLE. ACTIVE WEAR. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            LOOK BETTER. WEAR COMFORTABLE. ACTIVE WEAR. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            LOOK BETTER. WEAR COMFORTABLE. ACTIVE WEAR. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            LOOK BETTER. WEAR COMFORTABLE. ACTIVE WEAR.
          </p>
        </div>
      </div>
      <section class={styles.shopTheLook}>
        <h2 class={styles.sectionTitle}>Shop The Look.</h2>
        <div class={styles.productGrid}>
          <div class={styles.productCard}>
            <img src="/images/scuba-jacket-2.0.jpg" alt="Scuba Jacket 2.0" class={styles.productImage} />
            <h3 class={styles.productTitle}>Scuba Jacket 2.0</h3>
            <p class={styles.productPrice}>$118</p>
            <button class={styles.addToCart}>ADD TO CART</button>
          </div>
          <div class={styles.productCard}>
            <img src="/images/cropped-bra.jpg" alt="Cropped Bra" class={styles.productImage} />
            <h3 class={styles.productTitle}>Cropped Bra</h3>
            <p class={styles.productPrice}>$59</p>
            <button class={styles.addToCart}>ADD TO CART</button>
          </div>
          <div class={styles.productCard}>
            <img src="/images/classic-legging.jpg" alt="Classic Legging" class={styles.productImage} />
            <h3 class={styles.productTitle}>Classic Legging</h3>
            <p class={styles.productPrice}>$79</p>
            <button class={styles.addToCart}>ADD TO CART</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;