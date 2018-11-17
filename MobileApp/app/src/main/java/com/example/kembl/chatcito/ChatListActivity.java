package com.example.kembl.chatcito;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import java.util.ArrayList;

public class ChatListActivity extends AppCompatActivity {
    Intent intent;
    String usernameKey;
    ArrayList<String> userChatList;
    ListView chatListView;
    ArrayAdapter<String> listAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_chat_list);
        intent = getIntent();
        usernameKey = intent.getStringExtra(getString(R.string.userKey));

//quemados
        userChatList = new ArrayList<>();
        userChatList.add("kemquar11");

        listAdapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, userChatList);
        chatListView = findViewById(R.id.chatListView);
        chatListView.setAdapter(listAdapter);

        chatListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                startChatActivity(usernameKey);
            }
        });
    }

    public void startChatActivity(String keyUsername){
        Intent intent = new Intent(this, CurrentChatActivity.class);
        intent.putExtra(getString(R.string.userKey), keyUsername);
        startActivity(intent);
    }
}