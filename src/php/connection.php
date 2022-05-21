<?php
    require 'classes.php';

    try
    {
        $oConfiguration = new Configuration('Localhost', 'pcshop', 'root', '');
        $oConnection = new PDO("mysql:host=".$oConfiguration->getHost().";dbname=".$oConfiguration->getDbName(), $oConfiguration->getUsername(), $oConfiguration->getPassword());
        $oConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    catch(PDOException $exception)
    {
    }
?>