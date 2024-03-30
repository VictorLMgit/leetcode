import java.util.HashMap;
import java.util.Map;
import java.util.Stack;

class Solution {

    public boolean isValid(String s) {

        Stack oppenedBracket = new Stack();

        Map reverseTypes = new HashMap<Character, Character>();
        reverseTypes.put(')','(');
        reverseTypes.put('}','{');
        reverseTypes.put(']','[');

        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '(' || s.charAt(i) == '{' || s.charAt(i) == '[' ) {
                oppenedBracket.push(s.charAt(i));
                continue;
            }
            if (oppenedBracket.empty()) return false;
            
            if (oppenedBracket.lastElement() == reverseTypes.get(s.charAt(i))) {
                oppenedBracket.pop();
                continue;
            }    
            return false;
        }

        return oppenedBracket.empty();
    }
}

/**
 * Solution20
 */
public class Solution20 {
    public static void main(String[] args) {
        Solution s = new Solution();
        boolean r = s.isValid("]");
        System.out.println(r);

    }

}