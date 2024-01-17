<?php

class Solution {

    private $prevValues = [];

    function climbStairs(int $n) : int 
    {

        $result = $this->fibMemoization($n);

        return $result;
    }


    private function fibMemoization(int $n) : int
    {
        if (key_exists($n, $this->prevValues)) return $this->prevValues[$n];
        if ($n < 2) return 1;

        $this->prevValues[$n] = $this->fibMemoization($n-1, $this->prevValues) + $this->fibMemoization($n-2, $this->prevValues);
       
        return $this->prevValues[$n];
    }
}


$a = new Solution();

echo $a->climbStairs(46);

