<?php

class Solution {

    function climbStairs(int $n) : int 
    {

        $result = $this->fibMemoization($n, []);

        return $result;
    }


    private function fibMemoization(int $n, &$prevValues) : int
    {
        if (key_exists($n, $prevValues)) return $prevValues[$n];
        if ($n < 2) return 1;

        $prevValues[$n] = $this->fibMemoization($n-1, $prevValues) + $this->fibMemoization($n-2, $prevValues);
       
        return $prevValues[$n];
    }
}


$a = new Solution();

echo $a->climbStairs(10);

