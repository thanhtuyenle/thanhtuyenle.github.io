package model;

import java.util.HashMap;
import java.util.Map;

public class UserMap {
    public static final Map<String, User> myUserMap;
    static {
        myUserMap = new HashMap<>();
        myUserMap.put("tuyen", new User("tuyen", "123"));
        myUserMap.put("thu", new User("thu","456"));
        myUserMap.put("van", new User("van", "789"));
    }
}
