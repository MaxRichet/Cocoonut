<?php
if(isset($_POST["message"])) {
    $message = "Ce message vous a été envoyé via la page contact du site Cocoonut
    Nom : " . $_POST["the_lastname"] . "
    Prénom : " . $_POST["the_firstname"] . "
    Téléphone : " . $_POST["the_phone"] . "
    Email : " . $_POST["the_email"] . "
    Message : " . $_POST["message"];

    $retour = mail("contact@redcat-studio.fr", $_POST["the_subject"], $message, "From:contact@redcat-studio.fr\r\nReply-to:" . $_POST["the_email"]);

    if($retour){
        echo "<p> L'email a bien été envoyé.</p>";
    }
}