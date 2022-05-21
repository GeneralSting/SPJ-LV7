<?php

header('Content-type: text/json');
header('Content-type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

include 'connection.php';

$sql_query = 'Select * from artikli';
$oRecord = $oConnection->query($sql_query);
$aOprema = array();
while($oRow = $oRecord->fetch(PDO::FETCH_BOTH))
{
    $oOprema = new Oprema($oRow['id'], $oRow['naziv'], $oRow['proizvodac'], $oRow['model'], $oRow['cijena'], $oRow['kolicina']);
    array_push($aOprema, $oOprema);

}
echo json_encode($aOprema);


?>