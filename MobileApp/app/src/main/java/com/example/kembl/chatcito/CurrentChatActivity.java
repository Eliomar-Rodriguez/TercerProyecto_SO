package com.example.kembl.chatcito;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.ListView;

import ChatMessage.Message;
import ChatMessage.MessageAdapter;

public class CurrentChatActivity extends AppCompatActivity {
    EditText inputMessageText;
    MessageAdapter messageAdapter = new MessageAdapter(this);
    Intent intent;
    String usernameKey;
    ListView messagesView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_current_chat);

        inputMessageText = findViewById(R.id.inputEditText);
        messagesView = findViewById(R.id.messages_view);

        intent = getIntent();
        usernameKey = intent.getStringExtra(getString(R.string.userKey));

        messageAdapter = new MessageAdapter(this);
        messagesView = findViewById(R.id.messages_view);
        messagesView.setAdapter(messageAdapter);
    }

    public void sendMessage(View view){
        String message = inputMessageText.getText().toString();
        if (message.length() > 0) {
            //enviar mensaje
            final Message mesage = new Message(message, true);
            messageAdapter.add(mesage);
            inputMessageText.getText().clear();
            receiveMessage();
        }
    }

    public void receiveMessage(){
        try{
            // member.clientData is a MemberData object, let's parse it as such
            // if the clientID of the message sender is the same as our's it was sent by us
            boolean belongsToCurrentUser = true;
            // since the message body is a simple string in our case we can use json.asText() to parse it as such
            // if it was instead an object we could use a similar pattern to data parsing
            final Message mesage = new Message("hola todo cool por alla estamos con frio", false);

            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    messageAdapter.add(mesage);
                    // scroll the ListView to the last added element
                    messagesView.setSelection(messagesView.getCount() - 1);
                }
            });
        } catch (Exception e){
            e.printStackTrace();
        }
    }
}
