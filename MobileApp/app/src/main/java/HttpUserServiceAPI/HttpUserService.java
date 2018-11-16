package HttpUserServiceAPI;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;

/**
 * Created by kembl on 14/11/2018.
 */

public interface HttpUserService {
    @GET("allUsers") public Call<List<User>> getAllUsers();

    @POST("login") public Call<Boolean> verifyUser(@Body User user);

    /*
    * @GET("/posts")
    * public Call<List<Post>> getPostOfUser(@Query("userId") int id);
    *
    * @POST("/posts")
    * public Call<Post> postData(@Body Post data);
    */
}
