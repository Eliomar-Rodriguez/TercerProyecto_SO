package com.example.kembl.chatcito;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.List;

import HttpUserServiceAPI.DataUser;
import HttpUserServiceAPI.HttpUserService;
import HttpUserServiceAPI.ResponseData;
import HttpUserServiceAPI.RetrofitService;
import HttpUserServiceAPI.User;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ChatListActivity extends AppCompatActivity {
    Intent intent;
    String usernameKey;
    int idUserKey;
    List<DataUser> users = new ArrayList<>();
    HttpUserService apiService;
    ListView chatListView;
    List<String> userChatList = new ArrayList<>();
    ArrayAdapter<String> listAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_chat_list);
        intent = getIntent();
        usernameKey = intent.getStringExtra(getString(R.string.myUsernameKey));
        chatListView = findViewById(R.id.chatListView);

        apiService = RetrofitService.getInstance().getServiceAPI();
        getContacts();

        chatListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                String currentUsername = (String)(chatListView.getItemAtPosition(position));
                DataUser thisUser = getCurrentChatUser(currentUsername);
                if(thisUser == null) Toast.makeText(getApplicationContext(), "Error con el usuario.", Toast.LENGTH_SHORT).show();
                else startChatActivity(thisUser.getUsername(), String.valueOf(thisUser.getId()));
            }
        });
    }

    public void getContacts(){
        Call<ResponseData> usersRequest = apiService.getAllUsers();
        usersRequest.enqueue(new Callback<ResponseData>() {
            @Override
            public void onResponse(Call<ResponseData> call, Response<ResponseData> response) {
                users = response.body().getData();
                for(DataUser user : users){
                    if(!user.getUsername().equals(usernameKey)) userChatList.add(user.getUsername());
                    else idUserKey = user.getId();
                }
                listAdapter = new ArrayAdapter<>(ChatListActivity.this, android.R.layout.simple_list_item_1, userChatList);
                chatListView.setAdapter(listAdapter);
            }

            @Override
            public void onFailure(Call<ResponseData> call, Throwable t) {

            }
        });
    }

    public DataUser getCurrentChatUser(String username){
        for(DataUser user: users){
            if(user.getUsername().equals(username)) return user;
        }
        return null;
    }

    public void startChatActivity(String keyReceiverUsername, String keyReceiverID){
        Intent intent = new Intent(this, CurrentChatActivity.class);
        intent.putExtra(getString(R.string.receiverKey), keyReceiverUsername);
        intent.putExtra(getString(R.string.receiverIDKey), keyReceiverID);
        intent.putExtra(getString(R.string.myIDKey), String.valueOf(idUserKey));
        startActivity(intent);
    }
}