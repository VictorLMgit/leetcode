<?php

class Solution
{

    /**
     * @param int[] $nums
     * @param int $target
     * @return Integer[]
     */
    function twoSum($nums, $target)
    {

        $hasedMap = [];

        for ($i = 0; $i < count($nums); $i++) {

            $complement = $target - $nums[$i];

            if (array_key_exists($complement, $hasedMap))  return [$i, $hasedMap[$complement]];
            
            $hasedMap[$nums[$i]] = $i;
        }
       
        return [];
    }
}