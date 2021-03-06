package HttpUserServiceAPI;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import java.util.List;

/**
 * Created by kembl on 17/11/2018.
 */

public class ResponseData {
    @SerializedName("success") @Expose private boolean success;
    @SerializedName("error") @Expose private int error;
    @SerializedName("title") @Expose private String title;
    @SerializedName("message") @Expose private String message;
    @SerializedName("data") @Expose private List<DataUser> data;

    public boolean isSuccess() {
        return success;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<DataUser> getData() {
        return data;
    }

    public void setData(List<DataUser> data) {
        this.data = data;
    }
}
