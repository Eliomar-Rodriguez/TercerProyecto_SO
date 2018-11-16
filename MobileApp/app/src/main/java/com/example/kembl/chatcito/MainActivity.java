package com.example.kembl.chatcito;

import android.Manifest;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.List;

import HttpUserServiceAPI.HttpUserService;
import HttpUserServiceAPI.RetrofitService;
import HttpUserServiceAPI.User;

public class MainActivity extends AppCompatActivity {
    EditText username, password;
    Button loginAction;
    HttpUserService apiService;
    List<User> users;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        username = findViewById(R.id.usernameTxt);
        password = findViewById(R.id.passwordTxt);
        loginAction = findViewById(R.id.loginBtn);
        apiService = RetrofitService.getInstance().getServiceAPI();
        users = new ArrayList<>();

        //meanwhile
        users.add(new User("kemblyqa","123"));
        users.add(new User("kemquar11","123"));

//        Call<List<User>> usersRequest = apiService.getAllUsers();
//        usersRequest.enqueue(new Callback<List<User>>() {
//            @Override
//            public void onResponse(Call<List<User>> call, Response<List<User>> response) {
//                users = response.body();
//
//                for (User user : users){
//                    Toast.makeText(getApplicationContext(), user.getUsername(),Toast.LENGTH_SHORT).show();
//                }
//            }
//
//            @Override
//            public void onFailure(Call<List<User>> call, Throwable t) {
//
//            }
//        });

        loginAction.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if(autenticationFromAPI(username.getText().toString(), password.getText().toString()))
                    startChatListActivity(username.getText().toString());
                 Toast.makeText(getApplicationContext(), R.string.autenticationFailed, Toast.LENGTH_LONG).show();
            }
        });
    }

    public void startChatListActivity(String keyUsername){
        Intent intent = new Intent(MainActivity.this, ChatListActivity.class);
        intent.putExtra(getString(R.string.userKey), keyUsername);
        MainActivity.this.startActivity(intent);
    }

    //quemados
    //la autenticacion deberia ser un endpoint
    public boolean autenticationFromAPI(String user, String pass){
        for(User itemUser : users)
            if(itemUser.getUsername().equals(user) && itemUser.getPassword().equals(pass)) return true;
        return false;
    }
}