package HttpUserServiceAPI;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

/**
 * Created by kembl on 17/11/2018.
 */

public class DataUser{
    @SerializedName("ID") @Expose private int id;
    @SerializedName("username") @Expose private String username;
    @SerializedName("success") @Expose private int idFromServer;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }
}
