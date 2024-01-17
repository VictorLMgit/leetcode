<?php

class Algoritmos{

    public function BinarySearch(array $arr , int $target) : int{

        $left = 0;
        $right = count($arr) - 1;
        $mid = ($left + $right)/2;

        while ($left <= $right) {

            if ($arr[$mid] == $target) return $mid;

            if ($arr[$mid] > $target) {
                $right = $mid - 1;
                $mid = ($left + $right)/2;
                continue;
            }

            $left = $mid + 1;
            $mid = ($left + $right)/2;

        }

        return -1;
    }

}
