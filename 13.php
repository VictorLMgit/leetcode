<?php

class Solution
{

    private const VALUES = [
        'I' => 1,
        'V' => 5,
        'X' => 10,
        'L' => 50,
        'C' => 100,
        'D' => 500,
        'M' => 1000,
    ];

    /**
     * @param String $s
     * @return Integer
     */
    function romanToInt($s)
    {
       
        $intValue = 0;
        for ($i=0; $i <strlen($s) ; $i++) { 

            if (self::VALUES[$s[$i]] < self::VALUES[$s[$i+1]] ) {
                $intValue += self::VALUES[$s[$i+1]] - self::VALUES[$s[$i]];
                $i++;
                continue;
            }
            $intValue += self::VALUES[$s[$i]];
        }
        return $intValue;
    }
}