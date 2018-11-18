package com.example.kembl.chatcito;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;
import HttpUserServiceAPI.HttpUserService;
import HttpUserServiceAPI.ResponseData;
import HttpUserServiceAPI.RetrofitService;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MainActivity extends AppCompatActivity {
    EditText username, password;
    Button loginAction;
    HttpUserService apiService;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        username = findViewById(R.id.usernameTxt);
        password = findViewById(R.id.passwordTxt);
        loginAction = findViewById(R.id.loginBtn);
        apiService = RetrofitService.getInstance().getServiceAPI();
        loginAction.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                wasLoginSuccessful(username.getText().toString(), password.getText().toString());
            }
        });
    }

    public void startChatListActivity(String keyUsername){
        Intent intent = new Intent(this, ChatListActivity.class);
        intent.putExtra(getString(R.string.myUsernameKey), keyUsername);
        startActivity(intent);
    }

    public void wasLoginSuccessful(final String user, String pass){
        Call<ResponseData> loginRequest = apiService.verifyLogin(user,pass);
        loginRequest.enqueue(new Callback<ResponseData>() {
            @Override
            public void onResponse(Call<ResponseData> call, Response<ResponseData> response) {
                if(response.body().isSuccess()){
                    startChatListActivity(user);
                } else{
                    Toast.makeText(MainActivity.this, R.string.autenticationFailed, Toast.LENGTH_LONG).show();
                }
            }

            @Override
            public void onFailure(Call<ResponseData> call, Throwable t) {
                Toast.makeText(MainActivity.this, "Hay un problema con el servidor en este momento.", Toast.LENGTH_LONG).show();
            }
        });
    }
}