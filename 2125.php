<?php

class Solution
{

    
    function numberOfBeams(array $bank) : int
    {

        $count = 0;
        $temp = array();

       for ($i=0; $i < count($bank) ; $i++) { 
            $ones = $this->countOne($bank[$i]);
            if ($ones>0) {
                $temp[] = $ones;
            }
       }

       for ($i=1; $i < count($temp); $i++) { 
            $count += $temp[$i] * $temp[$i-1]; 
       }
        return $count;

    }

    private function countOne(string $str) : int
    {
        $count = 0;
        $l = 0;
        $r = strlen($str) - 1;

        while ($l<=$r) {
            if($str[$l] == 1) $count++;
            if($str[$r] == 1 && $l != $r) $count++;
            $l++;
            $r--;
        }

        return $count;
    }
}

$a = new Solution();
echo $a->numberOfBeams(["011001","000000","010100","001000"]);