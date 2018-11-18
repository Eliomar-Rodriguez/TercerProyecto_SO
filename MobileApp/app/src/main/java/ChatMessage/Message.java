package ChatMessage;

/**
 * Created by kembl on 16/11/2018.
 */

public class Message {
    private String name;
    private String text; // message body
    private boolean belongsToCurrentUser; // is this message sent by us?

    public Message(String text, boolean belongsToCurrentUser) {
        this.text = text;
        this.belongsToCurrentUser = belongsToCurrentUser;
    }

    public String getText() {
        return text;
    }

    public boolean isBelongsToCurrentUser() {
        return belongsToCurrentUser;
    }
}
