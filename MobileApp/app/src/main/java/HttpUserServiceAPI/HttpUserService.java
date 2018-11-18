package HttpUserServiceAPI;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.Field;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.GET;
import retrofit2.http.POST;

/**
 * Created by kembl on 14/11/2018.
 */

public interface HttpUserService {

    @GET("allUsers") Call<ResponseData> getAllUsers();

    @POST("login")
    @FormUrlEncoded
    Call<ResponseData> verifyLogin(
            @Field("userName") String userName,
            @Field("contrasenia") String contrasenia
    );

    @POST("getMessagesChat")
    @FormUrlEncoded
    Call<ResponseMessage> getMessagesChat(
            @Field("ID_Emiter") int idEmitter,
            @Field("ID_Receiver") int idReceiver
    );

    @POST("sendMessage")
    @FormUrlEncoded
    Call<ResponseMessage> sendMessage(
            @Field("textMessage") String textMessage,
            @Field("ID_Emiter") int idEmitter,
            @Field("ID_Receiver") int idReceiver
    );
}
