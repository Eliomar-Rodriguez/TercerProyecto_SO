package com.example.kembl.chatcito;

import android.content.DialogInterface;
import android.content.Intent;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.InputType;
import android.view.View;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.Toast;

import ChatMessage.Message;
import ChatMessage.MessageAdapter;

public class CurrentChatActivity extends AppCompatActivity {
    EditText inputMessageText;
    MessageAdapter messageAdapter = new MessageAdapter(this);
    Intent intent;
    String receiverUsernameKey;
    ListView messagesView;
    int works = 1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_current_chat);

        intent = getIntent();
        receiverUsernameKey = intent.getStringExtra(getString(R.string.receiverKey));

        inputMessageText = findViewById(R.id.inputEditText);
        messagesView = findViewById(R.id.messages_view);

        messageAdapter = new MessageAdapter(this);
        messagesView = findViewById(R.id.messages_view);
        messagesView.setAdapter(messageAdapter);
    }

    public void sendMessage(){
        String message = inputMessageText.getText().toString();
        if (message.length() > 0) {
            //enviar mensaje
            final Message mesage = new Message(message, true);
            messageAdapter.add(mesage);
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

    public void WorksAlertDialog(View view){
        final EditText input = new EditText(this);
        input.setInputType(InputType.TYPE_CLASS_NUMBER);
        new AlertDialog.Builder(CurrentChatActivity.this)
            .setTitle("Antes de enviar")
            .setMessage("Cuantos trabajos por lotes desea enviar (entre 1 hasta 999)")
            .setView(input)
            .setCancelable(true)
            .setPositiveButton("Ok", new DialogInterface.OnClickListener() {
                @Override
                public void onClick(DialogInterface dialog, int which) {
                    String num = input.getText().toString();
                    if(!num.equals(""))
                        works = Integer.parseInt(num);
                    sendMassiveMessages(works);
                }
            }).show();
    }

    public void sendMassiveMessages(int tot){
        if(tot > 1 && tot < 1000){
            for (int i = 0; i < tot; i++) {
                sendMessage();
            }
        } else {
            Toast.makeText(getApplicationContext(), "Mensaje enviado una vez", Toast.LENGTH_SHORT).show();
            sendMessage();
        }
        inputMessageText.getText().clear();
    }
}
