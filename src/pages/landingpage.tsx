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
      <div class={styles.brandGrid}>
        <div class={styles.brandItem}>
          <p class={styles.brandCaption}>
            FREE SHIPPING ON ALL DOMESTIC ORDERS OVER $150 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            FREE SHIPPING ON ALL DOMESTIC ORDERS OVER $150 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            FREE SHIPPING ON ALL DOMESTIC ORDERS OVER $150 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            FREE SHIPPING ON ALL DOMESTIC ORDERS OVER $150 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            FREE SHIPPING ON ALL DOMESTIC ORDERS OVER $150 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            FREE SHIPPING ON ALL DOMESTIC ORDERS OVER $150 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            FREE SHIPPING ON ALL DOMESTIC ORDERS OVER $150
          </p>
        </div>
      </div>

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
        <div class={styles.topSection}>
          <div class={styles.imageWrapper2}>
            <img src={model} alt="Main Fashion" class={styles.mainImage} />
          </div>
          <div class={styles.content}>
            <h2 class={styles.titlebottom}>Shop The Look.</h2>
            <div class={styles.productGridBottom}>
              <div class={styles.productCardBottom}>
                <img src={model2} alt="Cropped Bra" class={styles.productImageBottom} />
                <h3 class={styles.productTitleBottom}>Cropped Bra</h3>
                <p class={styles.productPriceBottom}>$59</p>
                <button class={styles.addToCartBottom}>ADD TO CART</button>
              </div>
              <div class={styles.productCardBottom}>
                <img src={model2} alt="Cropped Bra" class={styles.productImageBottom} />
                <h3 class={styles.productTitleBottom}>Cropped Bra</h3>
                <p class={styles.productPriceBottom}>$59</p>
                <button class={styles.addToCartBottom}>ADD TO CART</button>
              </div>
              <div class={styles.productCardBottom}>
                <img src={model3} alt="Classic Legging" class={styles.productImageBottom} />
                <h3 class={styles.productTitleBottom}>Classic Legging</h3>
                <p class={styles.productPriceBottom}>$79</p>
                <button class={styles.addToCartBottom}>ADD TO CART</button>
              </div>
              <div class={styles.productCardBottom}>
                <img src={model3} alt="Classic Legging" class={styles.productImageBottom} />
                <h3 class={styles.productTitleBottom}>Classic Legging</h3>
                <p class={styles.productPriceBottom}>$79</p>
                <button class={styles.addToCartBottom}>ADD TO CART</button>
              </div>
              <div class={styles.productCardBottom}>
                <img src={model3} alt="Classic Legging" class={styles.productImageBottom} />
                <h3 class={styles.productTitleBottom}>Classic Legging</h3>
                <p class={styles.productPriceBottom}>$79</p>
                <button class={styles.addToCartBottom}>ADD TO CART</button>
              </div>
              <div class={styles.productCardBottom}>
                <img src={model3} alt="Classic Legging" class={styles.productImageBottom} />
                <h3 class={styles.productTitleBottom}>Classic Legging</h3>
                <p class={styles.productPriceBottom}>$79</p>
                <button class={styles.addToCartBottom}>ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
        <div class={styles.bottomSection}>
          <div class={styles.textContent}>
            <h2 class={styles.subTitle}>Discover More Styles</h2>
            <h1 class={styles.titlebottom2}>What We Stand For.</h1>
            <p class={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dui eu arcu efficitur sollicitudin. Fusce interdum, nisi id lobortis ultricies, elit leo vulputate mi, vel fermentum nunc eros non mi. Sed volutpat orci non nulla tincidunt, at mollis nisi sollicitudin. Nulla facilisi. Donec a sem sapien. Integer tempor, mauris id tempor tempor, eros purus ullamcorper ante, eu vestibulum nisi dui vel libero. Morbi et nisl ac sapien gravida pharetra. Ut auctor mi vel velit aliquam, at egestas metus dictum. Curabitur hendrerit urna sit amet risus iaculis, id condimentum felis vestibulum.
            </p>
            <button class={styles.readMore}>READ MORE</button>
          </div>
          <div class={styles.imageWrapper3}>
            <img src={model} alt="Additional Fashion" class={styles.secondaryImage} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;