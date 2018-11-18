package HttpUserServiceAPI;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

/**
 * Created by kembl on 17/11/2018.
 */

public class DataMessage {
    @SerializedName("TextMessage") @Expose private String textMessage;
    @SerializedName("ID_Emiter") @Expose private int idEmmiter;
    @SerializedName("ID_Receiver") @Expose private int idReceiver;

    public String getTextMessage() {
        return textMessage;
    }

    public int getIdEmmiter() {
        return idEmmiter;
    }
}
