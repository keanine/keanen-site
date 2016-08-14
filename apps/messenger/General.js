var sideBoxWidth = 300;

function AddConversation()
{
    if (document.getElementById("tempConv"))
    {
        var AddConvButton = document.getElementById("tempConv");
        AddConvButton.parentNode.removeChild(AddConvButton);
    }

    document.getElementById("conversations").innerHTML += '<div class="Conversation"><div class="img-circle"></div><div class="ConvTitle">Unnamed Conversation</div>  <div class="ConvPreview">Conversation preview</div></div>';
    document.getElementById("conversations").innerHTML += '<div id="tempConv" class="Conversation" onclick="AddConversation()"><div class="ConvTitleC">Create New Conversation</div>  <div class="ConvPreview"></div></div>';

}

function RecieveMessage(message)
{
    document.getElementById("messages").innerHTML += '<div class="MessageBubble"><div class="Incoming">' + message + '</div></div>';

    document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
}

function SendMessage(message, isNew) {
    if (isNew) {
        message = document.getElementById("txtMsg").value;
        document.getElementById("txtMsg").value = "";
        document.getElementById("txtMsg").focus();
    }

    if (message != "") {
        document.getElementById("messages").innerHTML += '<div class="MessageBubble"><div class="Outgoing">' + message + '</div></div>';
    }
    document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;

}

function OnEnterDown(e)
{
    if (e.which == 13 || e.keyCode == 13)
    {
        SendMessage("", true);
        return false;
    }
    return true;
}