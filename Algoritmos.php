<?php

class Algoritmos{

    public function BinarySearch(array $arr , int $target) : int
    {

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

    public function recursiveBinarySearch(array $arr, int $target, int $left, int $right) : int 
    {
       
        if($left > $right) return -1;
        
        $mid = ($left + $right) / 2;

        if ($arr[$mid] == $target) return $mid;
        if ($arr[$mid] > $target) return $this->recursiveBinarySearch($arr, $target, $left, $mid - 1);
        
        return $this->recursiveBinarySearch($arr, $target, $mid+1, $right);

    }

    public function insertionSort(array $arr) : array
    {
        $sortedArray = [];

        while (count($arr) != count($sortedArray)) {
            $max = $this->maxElement($arr);
            $sortedArray[] = $max[0];
            $arr[$max[1]] = 0;
        }
        return $sortedArray;
    }

    private function maxElement(array $array) : array 
    {
        $max = 0;
        $index = 0;
        
        for ($i=0; $i < count($array); $i++) { 
            if($array[$i] > $max){
                $max = $array[$i];
                $index = $i;
            }
        }

        return [$max, $index];
    }

}

$a = new Algoritmos();
$arr = [5,2,3,19,8, 1];
print_r($a->insertionSort($arr));
