<script>
</script>

<template>
  <article>
    <header>
      <picture>
         <source srcset="/src/images/image-product-desktop.jpg" media="(min-width: 48em)"/>
        <img src="/src/images/image-product-mobile.jpg" alt="Elegant parfume box"  loading="eager" decoding="async" />
      </picture>
    </header>
    <div class="product_info">
      <section>PERFUME</section>
      <h1>Gabrielle Essence Eau De Parfum</h1>
      <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, 
        Perfumer-Creator for the House of CHANEL.
      </p>
      <div class="price">
      <span>$149.99</span>
      <span class="discount">$169.99</span>
      </div>
    
        <button class="add-to-cart">
          <img src="/src/images/icon-cart.svg" alt="cart icon" />
          Add to Cart
      </button>
      
    
    </div>
    
  </article>
  <div class="attribution">
   <p>
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Cornelio-II</a>.
   </p>
  </div>
</template>

<style scoped>
.product_info {
  padding: 1.5rem;
}
.product_info section {
  text-transform: uppercase;
  font-weight: var(--montserrat-font-weight-medium);
  font-size: clamp(1rem, 0.956rem + 0.1878vw, 1.125rem);
  letter-spacing: 0.3rem;
  color: var(--neutral-color-gray);
}

 .price  { 
  color: var(--primary-color-500);
  font-size: clamp(1.5rem, 0.75rem + 1.2vw, 2.2rem);
  font-weight: var(--montserrat-font-weight-bold);
  font-family: var(--fraunces-font);
  
 }
 .discount{
  text-decoration: line-through;
  color: var(--neutral-color-gray);
  text-align: center;
  justify-self: center;
  margin-left: 1.8rem;
  font-size: clamp(1rem, 0.5rem + 0.0939vw, 2rem);
  font-weight: normal;

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
  font-weight: var(--montserrat-font-weight-medium);
}
.add-to-cart{
  display: flex;
  
  background-color: var(--primary-color-700);
  color: var(--neutral-color-white);
  align-items: center;
  justify-content: center;
  border: none;
  height: 60px;  
  width: 100%;
  border-radius: 0.375rem;
  padding: 0.75rem 1.5rem;
  font-weight: var(--montserrat-font-weight-bold);
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  
}
.add-to-cart img{
  width: 25px;
  height: 30px;
  margin-bottom: 10px;
}
.add-to-cart:hover {
  background-color: var(--primary-color-500);
}
</style>
