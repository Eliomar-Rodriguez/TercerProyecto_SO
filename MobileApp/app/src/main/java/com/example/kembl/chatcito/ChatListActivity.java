package com.example.kembl.chatcito;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

public class ChatListActivity extends AppCompatActivity {
    Intent intent;
    String usernameKey;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_chat_list);

        usernameKey = intent.getStringExtra(getString(R.string.userKey));
    }
}
