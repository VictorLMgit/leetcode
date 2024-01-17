import java.util.List;
import java.util.Map;
import java.util.ArrayList;
import java.util.HashMap;

class Solution17 {

    private Map<Character, String> digitsMap = new HashMap<>();


    public List<String> letterCombinations(String digits) {
        List<String> result = new ArrayList<>();

        if (digits == null || digits.length() == 0) return result;
        

        digitsMap.put('2', "abc");
        digitsMap.put('3', "def");
        digitsMap.put('4', "ghi");
        digitsMap.put('5', "jkl");
        digitsMap.put('6', "mno");
        digitsMap.put('7', "pqrs");
        digitsMap.put('8', "tuv");
        digitsMap.put('9', "wxyz");
        
        combination(result, 0, new StringBuilder(), digits);
        
        return result;
    }

    private void combination(List<String> result, int currentIndex, StringBuilder comb, String digits){

        if (currentIndex == digits.length() ) {
            result.add(comb.toString());
            return;
        }

        char currentDigit = digits.charAt(currentIndex);
        String letters = digitsMap.get(currentDigit);
        
        if (letters != null) {
            for (int i = 0; i < letters.length(); i++) {
                char letter = letters.charAt(i);
                comb.append(letter);
                combination(result, currentIndex + 1, comb, digits);
                comb.deleteCharAt(comb.length() -1);
            }
        }

    }
}