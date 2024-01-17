<?php 

class Solution {

    /**
     * @param String $s
     * @return Boolean
     */
    function halvesAreAlike($s) {
        $l = 0;
        $r = strlen($s) - 1;
        $cl = 0;
        $cr = 0;
        while ($l < $r) {
            if ($this->isVogal($s[$l])) {
                $cl++;
            }
            if ($this->isVogal($s[$r])) {
                $cr++;
            }
            $l++;
            $r--;
        }
        return $cl == $cr;
    }

    private function isVogal($ch){
        $vogals = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        return in_array($ch, $vogals);
    }
}