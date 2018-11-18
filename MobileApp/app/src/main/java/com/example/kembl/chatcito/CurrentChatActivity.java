package com.example.kembl.chatcito;

import android.content.DialogInterface;
import android.content.Intent;
import android.os.Handler;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.InputType;
import android.view.View;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.Toast;

import java.util.Timer;
import java.util.TimerTask;

import ChatMessage.Message;
import ChatMessage.MessageAdapter;
import HttpUserServiceAPI.DataMessage;
import HttpUserServiceAPI.HttpUserService;
import HttpUserServiceAPI.ResponseData;
import HttpUserServiceAPI.ResponseMessage;
import HttpUserServiceAPI.RetrofitService;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class CurrentChatActivity extends AppCompatActivity {
    EditText inputMessageText;
    MessageAdapter messageAdapter = new MessageAdapter(this);
    Intent intent;
    int receiverIDKey;
    int idUserKey;
    HttpUserService apiService;
    ListView messagesView;
    int works = 1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_current_chat);

        intent = getIntent();
        receiverIDKey = Integer.parseInt(intent.getStringExtra(getString(R.string.receiverIDKey)));
        idUserKey = Integer.parseInt(intent.getStringExtra(getString(R.string.myIDKey)));

        inputMessageText = findViewById(R.id.inputEditText);
        messagesView = findViewById(R.id.messages_view);
        apiService = RetrofitService.getInstance().getServiceAPI();
        UpdateMessages();

        messageAdapter = new MessageAdapter(this);
        messagesView = findViewById(R.id.messages_view);
        messagesView.setAdapter(messageAdapter);
    }

    public void sendMessage(int tot){
        final String message = inputMessageText.getText().toString() + " -> " + tot;
        if (message.length() > 0) {
            Call<ResponseMessage> messageSent = apiService.sendMessage(message, idUserKey, receiverIDKey);
            messageSent.enqueue(new Callback<ResponseMessage>() {
                @Override
                public void onResponse(Call<ResponseMessage> call, Response<ResponseMessage> response) {
                    if(response.body().isSuccess()){
                        final Message mesage = new Message(message, true);
                        messageAdapter.add(mesage);
                        messagesView.setSelection(messagesView.getCount() - 1);
                    }
                }

                @Override
                public void onFailure(Call<ResponseMessage> call, Throwable t) {

                }
            });
        }
    }

    public void getAllMessages(){
        Call<ResponseMessage> allMessages = apiService.getMessagesChat(idUserKey, receiverIDKey);
        allMessages.enqueue(new Callback<ResponseMessage>() {
            @Override
            public void onResponse(Call<ResponseMessage> call, Response<ResponseMessage> response) {
                ResponseMessage responseMessage = response.body();
                boolean belongsToCurrentUser;
                if(responseMessage.isSuccess()){
                    for(DataMessage message : responseMessage.getData()){
                        if(message.getIdEmmiter() == idUserKey) belongsToCurrentUser = true;
                        else belongsToCurrentUser = false;
                        setMessagesView(message.getTextMessage(), belongsToCurrentUser);
                    }
                }
            }

            @Override
            public void onFailure(Call<ResponseMessage> call, Throwable t) {

            }
        });
    }

    public void setMessagesView(String text, boolean belongsToCurrentUser){
        messageAdapter.add(new Message(text, belongsToCurrentUser));
        messagesView.setSelection(messagesView.getCount() - 1);
    }

    public void UpdateMessages(){
        final Handler h = new Handler();
        h.postDelayed(new Runnable()
        {
            @Override
            public void run()
            {
                getAllMessages();
                h.postDelayed(this, 1000);
            }
        }, 1000);
    }

    public void WorksAlertDialog(View view){
        final EditText input = new EditText(this);
        input.setInputType(InputType.TYPE_CLASS_NUMBER);
        new AlertDialog.Builder(CurrentChatActivity.this)
            .setTitle("Antes de enviar")
            .setMessage("Cuantos trabajos por lotes desea enviar (entre 1 hasta 99)")
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
        if(tot > 1 && tot < 100){
            try{
                for (int i = 0; i < tot; i++) {
                    final int e = i;
                    Handler handler=new Handler();
                    handler.postDelayed(new Runnable() {
                        @Override
                        public void run() {
                            sendMessage(e);
                        }
                    }, 1000);
                }
            } catch (Exception e){
                e.printStackTrace();
            }

        } else {
            Toast.makeText(getApplicationContext(), "Mensaje enviado una vez", Toast.LENGTH_SHORT).show();
            sendMessage(-2);
        }
        inputMessageText.getText().clear();
    }
}
