<!DOCTYPE html>
<html lang="fr">
   <head>
      <title>Pimp Me Up </title>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
      <link rel="stylesheet" href="../css/index.css"><!--path change-->
      <link rel="stylesheet" href="../css/newsletter.css"><!--path change-->
   </head>
   <body class="body">
      <header class="section">
         <nav class="navbar"> </nav>
         <script lang="javascript" src="../javascript/P_nav_chargement.js"></script><!--path change-->
      </header>
    <!--Slideshow  -->
    <div class="slider"></div>
      <script lang="javascript" src="../javascript/slider_html.js"></script><!--path change-->
      <script lang="javascript" src="../javascript/slider_functions.js"></script><!--path change-->
      <!-- newsletter -->
      <section class="section newsletter">
         <div class="row">
            <div class="col">
               <h2>Parrainez un ami </h2>
               <p> Parrainez un ami et il bénéficiera d'une réduction de 10 € dès 40 € d'achats en ligne. Pour vous remercier, nous vous offrirons également
                  une réduction de 10 € lors de votre prochaine commande.
               </p>
               <button class="button btn-1">Parrainez</button>
            </div>
            <div class="col">
               <form action="../PHP/newsletters_traitement.php" method="post"><!--path change-->
                  <div>
                     <h2> Recevez notre Newsletter </h2>
                     <input type="email" name="email" placeholder="Adresse e-mail">
                     <button class="send">Envoyer</button>
                  </div>
               </form>
            </div>
         </div>
      </section>
      <!-- newsletter dynamique -->
      <div id="myModal" class="modal fade">
         <div class="modal-dialog modal-newsletter modal-dialog-centered">
            <div class="modal-content">
               <form id="newsletter-form" action="../PHP/newsletters_traitement.php" method="post"><!--path change-->
                  <div class="modal-header">
                     <h4>Abonnez-vous à notre Newsletter</h4>
                     <a href="#" class="close" data-dismiss="modal" aria-hidden="true"><span>&times;</span></a>
                  </div>
                  <div class="modal-body">
                     <div class="input-group">
                        <input type="email" name="email" class="form-control" placeholder="Entrez votre adresse e-mail" required>
                        <span class="input-group-append">
                        <input type="submit" class="btn btn-success" class="btn btn-1" value="S’inscrire">
                        </span>
                     </div>
                     <div class="form-check-inline pt-3 col-md-12">
                        <label class="form-check-label" for="flexCheckDefault" style="padding-left:16px">
                        <input type="checkbox" name="" class="form-check-inpu" id="flexCheckDefault" required>
                        En cliquant sur le bouton « S'INSCRIRE », vous confirmez que vous êtes âgé(e) d'au moins 18 ans et acceptez d'être lié(e) par les modalités suivantes :</label>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
      <script lang="javascript" src="../javascript/jquery.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
      <script lang="javascript" src="../javascript/main.js"></script> <!--path change-->
      <!-- footer -->
      <footer class="footer"> </footer>
      <script lang="javascript" src="../javascript/footer_html.js"></script><!--path change-->
      <div class="copyright">
         <p><i class='bx bx-registered'></i>2022 Pimp Me Up.</p>
      </div>
   </body>
</html> 
