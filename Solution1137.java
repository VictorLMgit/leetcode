import java.util.HashMap;
import java.util.Map;

class Solution1137 {
    public int tribonacci(int n) {
        Map memo = new HashMap<Integer, Integer>();
        return tribonacciMemo(n, memo);
    }

    public int tribonacciMemo(int n, Map<Integer, Integer> memozation){
        if (n == 0) return 0;
        if (n == 1) return 1;
        if (n == 2) return 1;
        if (memozation.get(n)!=null ) return memozation.get(n);
        int tribValue = tribonacciMemo(n-1, memozation) + tribonacciMemo(n-2, memozation) + tribonacciMemo(n-3, memozation);
        memozation.put(n, tribValue);
        return tribValue;
    }


    public static void main(String[] args) {
        Solution1137 sol = new Solution1137();
        System.out.println(sol.tribonacci(32));
    }


}