const createProduitCategorie = () => {
  const produits = document.querySelector('.produit-par-theme');

  produits.innerHTML = `

<section class="product">
  <h2 class="product-category">Vêtements</h2>
  <div class="product-container">
    <div class="product-card">
      <div class="product-image">
        <span class="discount-tag">-50% promo</span>
        <img src="../img/vetements2.jpg" class="product-thumb" alt="">
        <button class="card-btn">Ajouter aux favoris <i class='bx bx-heart bx-tada'></i><button>
      </div>
      <div class="product-info">
        <h2 class="product-brand">Magasin</h2>
        <p class="product-short-des">Lorem ipsum dolor sit amet..</p>
        <span class="price">20 €</span>  <span class="actual-price">59,99 €</span>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image">
          <span class="discount-tag">-20% promo</span>
          <img src="../img/robe2.jpg" class="product-thumb" alt="">
          <button class="card-btn">Ajouter aux favoris <i class='bx bx-heart bx-tada'></i><button>
      </div>
      <div class="product-info">
          <h2 class="product-brand">Magasin</h2>
          <p class="product-short-des">Lorem ipsum dolor sit amet..</p>
          <span class="price">20 €</span>  <span class="actual-price">59,99 €</span>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image">
          <span class="discount-tag">-20% promo</span>
          <img src="../img/robe3.jpg" class="product-thumb" alt="">
          <button class="card-btn">Ajouter aux favoris <i class='bx bx-heart bx-tada'></i><button>
      </div>
      <div class="product-info">
          <h2 class="product-brand">Magasin</h2>
          <p class="product-short-des">Lorem ipsum dolor sit amet..</p>
          <span class="price">20 €</span>  <span class="actual-price">59,99 €</span>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image">
          <span class="discount-tag">-20% promo</span>
          <img src="../img/kimono.jpg" class="product-thumb" alt="">
          <button class="card-btn">Ajouter aux favoris <i class='bx bx-heart bx-tada'></i><button>
      </div>
      <div class="product-info">
          <h2 class="product-brand">Magasin</h2>
          <p class="product-short-des">Lorem ipsum dolor sit amet..</p>
          <span class="price">20 €</span>  <span class="actual-price">59,99 €</span>
      </div>
    </div>
  </div>
</section>

<section class="product">
  <h2 class="product-category">Coiffure</h2>
  <div class="product-container">
    <div class="product-card">
      <div class="product-image">
        <span class="discount-tag">-50% promo</span>
        <img src="../img/coiffure2.jpg" class="product-thumb" alt="">
        <button class="card-btn">Ajouter aux favoris <i class='bx bx-heart bx-tada'></i><button>
      </div>
      <div class="product-info">
        <h2 class="product-brand">Magasin</h2>
        <p class="product-short-des">Lorem ipsum dolor sit amet..</p>
        <span class="price">20 €</span>  <span class="actual-price">59,99 €</span>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image">
          <span class="discount-tag">-20% promo</span>
          <img src="../img/coiffure3.jpg" class="product-thumb" alt="">
          <button class="card-btn">Ajouter aux favoris <i class='bx bx-heart bx-tada'></i><button>
      </div>
      <div class="product-info">
          <h2 class="product-brand">Magasin</h2>
          <p class="product-short-des">Lorem ipsum dolor sit amet..</p>
          <span class="price">20 €</span>  <span class="actual-price">59,99 €</span>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image">
          <span class="discount-tag">-20% promo</span>
          <img src="../img/coiffure4.jpg" class="product-thumb" alt="">
          <button class="card-btn">Ajouter aux favoris <i class='bx bx-heart bx-tada'></i><button>
      </div>
      <div class="product-info">
          <h2 class="product-brand">Magasin</h2>
          <p class="product-short-des">Lorem ipsum dolor sit amet..</p>
          <span class="price">20 €</span>  <span class="actual-price">59,99 €</span>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image">
          <span class="discount-tag">-20% promo</span>
          <img src="../img/coiffure5.jpg" class="product-thumb" alt="">
          <button class="card-btn">Ajouter aux favoris <i class='bx bx-heart bx-tada'></i><button>
      </div>
      <div class="product-info">
          <h2 class="product-brand">Magasin</h2>
          <p class="product-short-des">Lorem ipsum dolor sit amet..</p>
          <span class="price">20 €</span>  <span class="actual-price">59,99 €</span>
      </div>
    </div>
  </div>
</section>


`;
}

createProduitCategorie();
