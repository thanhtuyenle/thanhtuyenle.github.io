package model;

public class User {
    private String userName;
    private String password;
    public User(String un, String pw){
        this.userName = un;
        this.password = pw;
    }
    public String getUserName(){
        return this.userName;
    }
    public void setUserName(String un){
        this.userName = un;
    }
    public String getPassword(){
        return this.password;
    }
    public void setPassword(String pw){
        this.password = pw;
    }
}
