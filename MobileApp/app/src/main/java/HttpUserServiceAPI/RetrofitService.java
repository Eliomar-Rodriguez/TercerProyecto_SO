package HttpUserServiceAPI;

import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

/**
 * Created by kembl on 14/11/2018.
 */

//singleton class, need one instance only
public class RetrofitService {
    private static RetrofitService mInstance;
    private static final String BASE_URL = "";
    private Retrofit mRetrofit;

    private RetrofitService() {
        mRetrofit = new Retrofit.Builder()
                .baseUrl(BASE_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();
    }

    public static RetrofitService getInstance() {
        if (mInstance == null) {
            mInstance = new RetrofitService();
        }
        return mInstance;
    }
}