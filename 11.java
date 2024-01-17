class Solution {
    public int maxArea(int[] height) {
        
        int maxArea = 0;
        int numHeights = height.length;

        int left = 0;
        int right = numHeights - 1;


    
        while (left < right) {
            int area = calculateArea(height[left], left, height[right], right);
            maxArea = area > maxArea ? area : maxArea;
            if (height[left] > height[right]) {
                right--;
                continue;
            }
            left++;
        }
        
        return maxArea;
    }

    private int calculateArea(int h1, int i1, int h2, int i2){

        int minHeight = Math.min(h1, h2);
        int distance = i2 - i1;
        
        return minHeight * distance;
    }
}