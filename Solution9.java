public class Solution9 {
    public boolean isPalindrome(int x) {
        if (x < 0) return false;
        
        String num = x + "";
        int numLenght = num.length() - 1;
        
        for (int i = 0; i <= numLenght ; i++) {
            if (num.charAt(i) != num.charAt(numLenght - i) ) {
                return false;
            }
        }
        return true;
    }
}

