<?php

class Solution {

   
    function findMedianSortedArrays($nums1, $nums2) {

        $range = count($nums1) + count($nums2);
        $index1 = 0;
        $index2 = 0;
        $mergeArray = array();
        for ($i=0; $i < $range; $i++) { 

            if (!isset($nums2[$index2])) {
                $mergeArray[] = $nums1[$index1];
                $index1++;
                continue; 
            }
            if (!isset($nums1[$index1])) {
                $mergeArray[] = $nums2[$index2];
                $index2++;
                continue; 
            }

            if ($nums1[$index1] < $nums2[$index2]) {
                $mergeArray[] = $nums1[$index1];
                $index1++;
                continue;
            }
            $mergeArray[] = $nums2[$index2];
            $index2++;
        }

        if ($range%2!=0) {
            return $mergeArray[$range/2];
        }

        return ($mergeArray[$range/2] + $mergeArray[($range/2) - 1] ) / 2;
        
    }
}