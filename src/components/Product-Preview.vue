<script setup>
import desktopImg from '/image-product-desktop.jpg';
import mobileImg from '/image-product-mobile.jpg';
import addtoCartIcon from '/icon-cart.svg';
</script>

<template>
  <main class="product-container">
    <header>
      <picture>
        <source :srcset="desktopImg" media="(min-width: 37.5rem)" />
        <img 
        :src="mobileImg" 
        alt="Elegant parfume box" 
        loading="lazy" 
        />
      </picture>
    </header>
    <section class="product_info">
      <h4 class="category-name">Perfume</h4>
      <h1 class="product-name">Gabrielle Essence Eau De Parfum</h1>
      <p class="description">
        A floral, solar and voluptuous interpretation composed by Olivier Polge, 
        Perfumer-Creator for the House of CHANEL.
      </p>
      <div class="price-container">
        <span class="current-price">$149.99</span>
        <span class="original-price">$169.99</span>
      </div>
      <button class="add-to-cart-btn">
        <img :src="addtoCartIcon" alt="cart icon"/>
        <span>Add to Cart</span>
      </button>
    </section>
  </main>
  <footer class="attribution">
    <p>
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/Cornelio-II/product-preview-card-component">Cornelio Jr</a>.
    </p>
  </footer>
</template>

<style scoped>
.product-container{
  border-radius: 0.625rem; 
  overflow: hidden;
  max-inline-size: 34.375rem; /* max-width: 34.375rem for internationalization approach */
}
.product_info {
  background-color: var(--neutral-color-white);
  padding: 1.5rem;
  
}

.category-name{
  margin-block-start: auto; /* margin-top for internationalization */
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  color: var(--neutral-color-gray);
  font-weight: var(--montserrat-font-weight-medium);
}
.product-name{
  margin: 1rem 0;
  font-family: var(--fraunces-font);
  font-weight: var(--fraunces-font-weight-bold);
  font-size: var(--h1-font-size);
  line-height: 1;
  color: var(--neutral-color-black);
}

.current-price { 
  color: var(--primary-color-500);
  font-size: clamp(1.125rem, 1.2rem + 1vw, 1.5rem);
  font-weight: var(--montserrat-font-weight-bold);
  font-family: var(--fraunces-font);
  vertical-align: middle;
 }

.original-price{
  text-decoration: line-through;
  margin-inline-start: 1rem;  /* inline-start instead of left for internationalization */
  vertical-align: middle;
  font-weight: var(--montserrat-font-weight-medium);
}

.attribution {
  margin-block-start: 1rem; /* margin-top for internationalization */
  text-align: center;
  color: var(--neutral-color-gray);
}

a {
  color: var(--primary-color-700);
  text-decoration: underline;
}

a:hover {
  font-weight: var(--montserrat-font-weight-bold);
  text-decoration: none;
}

.description{
  margin: 1rem 0;
  font-weight: var(--montserrat-font-weight-medium);
 }

.add-to-cart-btn{
  inline-size: 100%; /* width: 100% for internationalization approach */
  block-size: auto; /* height: auto for internationalization approach */
  background-color: var( --primary-color-500);
  color: var(--neutral-color-white);
  border: none;
  outline: none;
  border-radius: 0.625em;
  cursor: pointer;
  transition: background-color 0.4s ease-in-out;
  margin: 1rem 0;
  padding: 1rem;
}

.add-to-cart-btn:hover {
  background-color: var(--primary-color-700);
}

.add-to-cart-btn span{
  vertical-align: middle;
  font-weight: var(--montserrat-font-weight-bold);
}

.add-to-cart-btn img {
  margin-inline-end: 1rem; /* inline-end instead of right for internationalization */
  inline-size: 1.2em; /* width: 1.2em for internationalization */
  inset-block: 1.2em; /* height: 1.2em for internationalization */
  filter: brightness(0) invert(1);
  vertical-align: middle;
  transition: filter 0.3s ease-in-out;
}

@media (min-width: 37.5rem) {
  .product-container{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .product_info{
    line-height: 1.5;
    block-size: 25.8rem; /* height: 25.8rem for internationalization approach */  
  }
}

</style>
