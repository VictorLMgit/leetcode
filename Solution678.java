class Solution {
    public boolean checkValidString(String s) {

        int close=0,open=0;
        for(int i=0; i<s.length();i++)
        {

            char ch = s.charAt(i);   

            if(ch == '(') open++;
            else open--;

            if(ch != ')') close++;
            else close--; 

            if(close < 0) break;
            
            open = Math.max(0 , open);
        }  
        return open == 0;
    }
    
}