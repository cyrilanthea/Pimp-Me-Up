<?php
    require_once 'config.php'; // On inclu la connexion à la bdd

    // Si les variables existent et qu'elles ne sont pas vides
    if(!empty($_POST['utilisateur']) && !empty($_POST['email']) && !empty($_POST['password']) && !empty($_POST['password_retype']))
    {

        $utilisateur = htmlspecialchars($_POST['utilisateur']);
        $email = htmlspecialchars($_POST['email']);
        $password = htmlspecialchars($_POST['password']);
        $password_retype = htmlspecialchars($_POST['password_retype']);

        // On vérifie si client existe
        $check = $bdd->prepare('SELECT * FROM client WHERE email = ?');
        $check->execute(array($email));
        $data = $check->fetch();
        $row = $check->rowCount();

        $email = strtolower($email); // on modifie toutes les lettres en majuscule en minuscule pour éviter que Pimpmeup@gmail.com et pimpmeup@gmail.com soient deux compte différents

               // Si row est égal à 0 ça veut dire que le compte il existe pas
                if($row == 0){
                    if(strlen($utilisateur) <= 20){ // On verifie que la longueur du pseudo <= 100
                        if(strlen($email) <= 20){ // On verifie que la longueur du mail <= 100
                    if(filter_var($email, FILTER_VALIDATE_EMAIL)){ // Si l'email est de la bonne forme
                        if($password === $password_retype){ // si les deux mdp saisis sont bon

                          // On hash le mot de passe avec Bcrypt, via un coût de 12
                            $cost = ['cost' => 12];
                            $password = password_hash($password, PASSWORD_BCRYPT, $cost);


                            $ip = $_SERVER['REMOTE_ADDR'];

                            // On insère dans la base de données
                            $insert = $bdd->prepare('INSERT INTO client(utilisateur, email, password)
                            VALUES(:utilisateur, :email, :password)');
                            $insert->execute(array(
                                'utilisateur' => $utilisateur,
                                'email' => $email,
                                'password' => $password
                            ));
                            // On redirige avec le message de succès
                            header('Location:C_Inscription.php?reg_err=success');
                            die();
                            // Sinon on redirige avec des message d'erreurs
                        }else{ header('Location: C_Inscription.php?reg_err=password'); die();}
                    }else{ header('Location: C_Inscription.php?reg_err=email'); die();}
                }else{ header('Location: C_Inscription.php?reg_err=email_length'); die();}
            }else{ header('Location: C_Inscription.php?reg_err=utilisateur_length'); die();}
        }else{ header('Location: C_Inscription.php?reg_err=already'); die();}
    }
