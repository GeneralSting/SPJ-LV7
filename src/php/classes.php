<?php

class Configuration
{
    private $host = "N/A";
    private $dbName = "N/A";
    private $username = "N/A";
    private $password = "N/A";

    public function getHost()
    {
        return $this->host;
    }
    public function getDbName()
    {
        return $this->dbName;
    }
    public function getUsername()
    {
        return $this->username;
    }
    public function getPassword()
    {
        return $this->password;
    }
    public function __construct($_host = null, $_dbName = null, $_username = null, $_password)
    {
        if($_host && $_dbName && $_username)
        {
            $this->host = $_host;
            $this->dbName = $_dbName;
            $this->username = $_username;
            $this->password = $_password;
        }
        else
        {
        }
    }
}

class Oprema {
    public $id;
    public $naziv;
    public $proizvodac;
    public $model;
    public $cijena;
    public $kolicina;


    public function __construct($_id, $_naziv, $_proizvodac, $_model, $_cijena, $_kolicina)
    {
        $this->id = $_id;
        $this->naziv = $_naziv;
        $this->proizvodac = $_proizvodac;
        $this->model = $_model;
        $this->cijena = $_cijena;
        $this->kolicina = $_kolicina;

    }

}

?>