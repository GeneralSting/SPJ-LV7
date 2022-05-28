<?php

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: access');
    header('Access-Control-Allow-Methods: POST');
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, Access-Control-Allow-Methods');

    require 'connection.php';

    $artikl_id = $_POST['id'];
    $artikl_naziv = $_POST['naziv'];
    $artikl_proizvodac = $_POST['proizvodac'];
    $artikl_model = $_POST['model'];
    $artikl_cijena = $_POST['cijena'];
    $artikl_kolicina = $_POST['kolicina'];


    $sql_query="update artikli set id = '".$artikl_id."', naziv = '".$_POST['naziv']."', proizvodac = '".$_POST['proizvodac']."', model = '".$_POST['model']."', cijena = '".$_POST['cijena'] ."', kolicina = '".$_POST['kolicina']."' where id = '".$_POST['id']."'";

    //$sql_query ="update artikl set id = " . $artikl_cijena . ", naziv = " . $artikl_naziv . ", proizvodac = " . $artikl_proizvodac . ", model = " . $artikl_model . ", cijena = " . $artikl_cijena . ", kolicina = " . $artikl_kolicina . "where id = " . $artikl_id;

    $oConnection->query($sql_query);

    echo $sql_query;

?>