import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

class RecentCounter {

    ArrayList<Integer> queue = new ArrayList<>();

    public RecentCounter() {
        
    }
    
    public int ping(int t) {
        queue.add(t);
        ArrayList<Integer> validStreams = queue.stream().filter(el -> t - el <= 3000).collect(Collectors.toCollection(ArrayList::new));
        queue = validStreams;
        return validStreams.size();
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * RecentCounter obj = new RecentCounter();
 * int param_1 = obj.ping(t);
 */