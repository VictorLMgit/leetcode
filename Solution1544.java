import java.util.HashMap;
import java.util.Stack;

class Solution1544 {
    public String makeGood(String s) {
        HashMap<Character, Character> inverseCase = new HashMap<>();
        inverseCase.put('a', 'A');
        inverseCase.put('b', 'B');
        inverseCase.put('c', 'C');
        inverseCase.put('d', 'D');
        inverseCase.put('e', 'E');
        inverseCase.put('f', 'F');
        inverseCase.put('g', 'G');
        inverseCase.put('h', 'H');
        inverseCase.put('i', 'I');
        inverseCase.put('j', 'J');
        inverseCase.put('k', 'K');
        inverseCase.put('l', 'L');
        inverseCase.put('m', 'M');
        inverseCase.put('n', 'N');
        inverseCase.put('o', 'O');
        inverseCase.put('p', 'P');
        inverseCase.put('q', 'Q');
        inverseCase.put('r', 'R');
        inverseCase.put('s', 'S');
        inverseCase.put('t', 'T');
        inverseCase.put('u', 'U');
        inverseCase.put('v', 'V');
        inverseCase.put('w', 'W');
        inverseCase.put('x', 'X');
        inverseCase.put('y', 'Y');
        inverseCase.put('z', 'Z');
        inverseCase.put('A', 'a');
        inverseCase.put('B', 'b');
        inverseCase.put('C', 'c');
        inverseCase.put('D', 'd');
        inverseCase.put('E', 'e');
        inverseCase.put('F', 'f');
        inverseCase.put('G', 'g');
        inverseCase.put('H', 'h');
        inverseCase.put('I', 'i');
        inverseCase.put('J', 'j');
        inverseCase.put('K', 'k');
        inverseCase.put('L', 'l');
        inverseCase.put('M', 'm');
        inverseCase.put('N', 'n');
        inverseCase.put('O', 'o');
        inverseCase.put('P', 'p');
        inverseCase.put('Q', 'q');
        inverseCase.put('R', 'r');
        inverseCase.put('S', 's');
        inverseCase.put('T', 't');
        inverseCase.put('U', 'u');
        inverseCase.put('V', 'v');
        inverseCase.put('W', 'w');
        inverseCase.put('X', 'x');
        inverseCase.put('Y', 'y');
        inverseCase.put('Z', 'z');
        Stack stack = new Stack<>();

        for (int i = 0; i < s.length(); i++) {
            if (!stack.empty() && inverseCase.get(stack.lastElement()) == s.charAt(i)) {
                stack.pop();
                continue;
            }
            stack.push(s.charAt(i));
        }
        String str = "";
        for (int i = 0; i < stack.size(); i++) {
            str += stack.get(i);
        }
        return str;
    }
}