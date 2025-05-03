<template>
  <div class="product-container">
    <header>
      <picture>
        <source srcset="/src/images/image-product-desktop.jpg" media="(min-width: 37.5rem)" />
        <img src="/src/images/image-product-mobile.jpg" alt="Elegant parfume box" fetchpriority="high" decoding="async"/>
      </picture>
    </header>
    <div class="product_info">
     <main>
        <section>PERFUME</section>
        <h1>Gabrielle Essence Eau De Parfum</h1>

        <p class="description">A floral, solar and voluptuous interpretation composed by Olivier Polge, 
          Perfumer-Creator for the House of CHANEL.
        </p>
     </main>
     <main>
        <div class="price-container">
          <span class="current-price">$149.99</span>
          <span class="original-price">$169.99</span>
        </div>
      </main>
      <button class="add-to-cart">
        <img src="/src/images/icon-cart.svg" alt="cart icon"/>
        <span>Add to Cart</span>
      </button>
    </div>
  </div>
  <div class="attribution">
   <p>
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Cornelio Jr</a>.
   </p>
  </div>
</template>

<style scoped>
.product-container{
  display: flex;
  flex-direction: column;
  background-color: var(--neutral-color-white);
  border-radius: 0.625rem; 
  overflow: hidden ;
  margin: 1.5rem ;
  max-width: 50em;
}
.product_info {
  padding: 1.5rem;
}
.product_info section {
  text-transform: uppercase;
  font-size: clamp(1rem, 0.956rem + 0.1878vw, 1.125rem);
  letter-spacing: 0.3rem;
  color: var(--neutral-color-gray);
}
.price-container{
  margin: 1rem 0;
}
.current-price { 
  color: var(--primary-color-500);
  font-size: clamp(1.7rem, 1.5rem + 2vw, 2.3rem);
  font-weight: var(--montserrat-font-weight-bold);
  font-family: var(--fraunces-font);
  vertical-align: middle;
 }

.original-price{
  text-decoration: line-through;
  color: var(--neutral-color-gray);
  margin-left: 1rem;
  vertical-align: middle;
}
.attribution {
  margin-top: 1rem;
  text-align: center;
  color: var(--neutral-color-gray);
}
.attribution a {
  color: var(--primary-color-orange);
  text-decoration: none;
}
.attribution a:hover {
  text-decoration: underline;
  font-weight: var(--montserrat-font-weight-bold);
}
.description{
    font-size: clamp(1.125rem,  1rem + 0.1878vw, 2.5rem);
    font-weight: var(--montserrat-font-weight-medium);
 }
.add-to-cart{
  width: 100%;
  height: auto;
  background-color: var( --primary-color-500);
  color: var(--neutral-color-white);
  border: none;
  outline: none;
  border-radius: 0.625em;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  margin: 1.2rem 0;
  padding: 1.2rem;
 
}
.add-to-cart:hover {
  background-color: var(--primary-color-700);
}

.add-to-cart span{
  font-size: 0.938rem;
  vertical-align: middle;
  font-weight: var(--montserrat-font-weight-bold);
}

.add-to-cart img {
  margin-right: 1rem;
  width: 1.2em;
  height: 1.2em;
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
    padding-inline: 2rem;
  }
 
}

</style>
