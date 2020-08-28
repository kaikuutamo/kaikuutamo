<?php

$id = $_POST["id"];

$order = $_POST["order"];


// send email

mail("kaitsu@sirkussirkus.com","Kai Kuutamo Tarjous: {$id}", $order);


?>

