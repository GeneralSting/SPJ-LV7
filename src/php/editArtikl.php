<?php

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: access');
    header('Access-Control-Allow-Methods: POST');
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, Access-Control-Allow-Methods');

    require 'connection.php';
    $sql_query = "Select * from artikli where id = ".$_GET['id'];
    $oRecord = $oConnection->query($sql_query);
    $aOprema = array();
    while($oRow = $oRecord->fetch(PDO::FETCH_BOTH))
    {
        $oOprema = new Oprema($oRow['id'], $oRow['naziv'], $oRow['proizvodac'], $oRow['model'], $oRow['cijena'], $oRow['kolicina']);
        array_push($aOprema, $oOprema);
    
    }
    echo json_encode($aOprema);

?>