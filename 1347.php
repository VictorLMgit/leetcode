<?php

class Solution {

function minSteps(string $s,string $t) : int 
{
    

    $mapS = $this->createMapChar($s);
    $mapT = $this->createMapChar($t);
    

    return min($this->qtdOperations($mapS, $mapT) , $this->qtdOperations($mapT, $mapS));
}

private function createMapChar(string $s) : array
{
    $hashMap = [];

    for ($i=0; $i < strlen($s); $i++) { 
        if (key_exists($s[$i], $hashMap)) {
            $hashMap[$s[$i]]++;
            continue;
        }
        $hashMap[$s[$i]] = 1;
    }


    return $hashMap;
}

private function qtdOperations(array $arr1 , array $arr2) : int
{
    $sum = 0;
    foreach ($arr1 as $key => $value) {
        
        
        
        if (!isset($arr2[$key])) {
            $sum += $value;
            continue;
        }

        if ($arr2[$key] >= $value) continue;

        $sum += $value - $arr2[$key];
        
    }

    return $sum;
}
}