package HttpUserServiceAPI;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

/**
 * Created by kembl on 14/11/2018.
 */

public class User {
    @SerializedName("ID") @Expose private String id;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
