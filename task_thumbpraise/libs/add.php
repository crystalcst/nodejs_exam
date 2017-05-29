<?php
class Connect {
    public $hostname;
    public $username;
    public $password;
    public $dbname;
    public $conn="";
    public function __construct($hostname,$username,$password,$dbname) {
        $this->hostname = $hostname;
        $this->username = $username;
        $this->password = $password;
        $this->dbname = $dbname;
    }
    public function connect() {
        try {
            $this->conn = new PDO ("mysql:host=$this->hostname;dbname=$this->dbname",$this->username,$this->password);

        } catch(PDOException $e) {
            echo $e->getMessage();
        }
    }
    public function update($sql) {
        if($this->conn == null) {
            $this->connect();
        }
        $res = $this->conn->exec($sql);
        $this->close();
        echo $res;

    }
    public function close() {
        $this->conn = null;
    }
}


class realConnect extends Connect {
    public function __construct($hostname,$username,$password,$dbname) {
        parent::__construct($hostname,$username,$password,$dbname);
    }
    public function updateRealData() {
        $sql = "UPDATE t_praise SET praiseNum =praiseNum + 1 WHERE id = 1";
        $this->update($sql);
    }
}

$mysqlConnect = new realConnect('localhost','root','root','db_praise');
$mysqlConnect->updateRealData();
?>
