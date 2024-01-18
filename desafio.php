<?php
class Database
{
    function connection(){
        return true;
    }
    function insert($inst){
        echo "Inserindo dados para o inst: ".$inst;
        return true;
    }
}
$db = new Database();











$op1 = true;
$op2 = true;
$op3 = false;
$op4 = true;





if ($op1 || $op2 && $op3) {
    $inst = "f";
} elseif ($op2 || $op3 && $op1) {
    $inst = "a";
}elseif ($op1 || $op2 && $op3) {
    $inst = "b";
} elseif ($op1 || $op3 && $op2) {
    $inst = "c";
} elseif ($op3 || $op2 && $op1) {
    $inst = "d";
} elseif ($op2 || $op3 && $op1) {
    $inst = "e";
}


$db->insert($inst);