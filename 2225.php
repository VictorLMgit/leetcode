<?php

class Solution {

    /**
     * @param Integer[][] $matches
     * @return Integer[][]
     */
    function findWinners($matches) {
        $winners = [];
        $losers = [];
        $players = [];
        foreach ($matches as $match) {
            $winners[] = $match[0];
            $losers[] = $match[1];
            if (!in_array($match[0], $players)) {
                $players[] = $match[0];
            }
            if (!in_array($match[1], $players)) {
                $players[] = $match[1];
            }
        }  

        $onlyWinners = array_diff($players, $losers);

        $map = [];
        for ($i=0; $i < count($losers); $i++) { 
            if (key_exists($losers[$i] , $map)) {
                $map[$losers[$i]]++;
                continue;
            }
            $map[$losers[$i]] = 1;
        }

        $losrsOneTime = [];
        foreach ($map as $key => $value) {
            if ($value == 1) {
                $losrsOneTime[] = $key;
            }
        }
        sort($onlyWinners);
        sort($losrsOneTime);
        return [$onlyWinners, $losrsOneTime];
        
    }
}

$a = new Solution();

$r = $a->findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]);

print_r($r);