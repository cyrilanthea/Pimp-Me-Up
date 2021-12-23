const createNav = () => {
  const nav = document.querySelector('.navbar');

  nav.innerHTML = `
  <div class="nav">
    <a class="navbar-brand" href="#"> <img src="../img/black_logo.png" class="brand-logo" alt="logo"></a>
    <a class="navbar-title" href="#"> <h1 class="brand-title"> Pimp Me Up</h1></a>
    <div class="nav-items">
        <div class="search">
          <input  type="text" class="searchInput" name="" placeholder="search product">
          <button type="submit" class="searchBtn">
              <img src="../img/search.png" alt="logo">
          </button>
        </div>
   </div>
   <div class ="nav-menu-items">
    <div class ="nav-menu-items-center">
     <ul class="menu-containers">
         <li class="menu-items"><a href=# class="menu">Boutique</a></li>
         <li class="menu-items"><a href=# class="menu">Vêtements</a>
             <ul class ="dropmenu">
               <li><a href="#">Robes</a></li>
               <li><a href="#">Jupes</a></li>
               <li><a href="#">Pantalons</a></li>
               <li><a href="#">Foulards</a></li>
             </ul>
          </li>
         <li class="menu-items"><a href=# class="menu">Accessoires</a>
           <ul class ="dropmenu">
             <li><a href="#">Bijoux</a></li>
             <li><a href="#">Sacs</a></li>
             <li><a href="#">Chaussures</a></li>
           </ul>
         </li>
         <li class="menu-items"><a href=# class="menu">Services</a>
           <ul class ="dropmenu">
             <li><a href="#">Coiffure</a></li>
             <li><a href="#">Maquillage</a></li>
             <li><a href="#">Soin</a></li>
             <li><a href="#">Bien-être</a></li>
           </ul>
         </li>
         <li class="menu-items"><a href=# class="menu">Nous</a></li>
         <li class="menu-items"> <a href="Choix.html"> <img src="../img/user.png" alt="logo"></a></li>
         <li class="menu-items">
          <a href="#"> <img src="../img/cart.png" alt="logo"></a>
          <span class="d-flex">0</span>
        </li>
     </ul>
    </div
   </div>
  </div>
`;
}

createNav();
