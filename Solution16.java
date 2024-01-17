import java.util.HashSet;
import java.util.Set;

public class Solution16 {
      public int removeDuplicates(int[] nums) {

        Set hashSet = new HashSet<Integer>();

        int index = 0;
        for (int i = 0; i < nums.length; i++) {
            int n = nums[i];
            
            if (hashSet.contains(n)) continue;

            hashSet.add(n);
            
            nums[index] = n;
            index++;
        }

        

        return index;
    }
}
