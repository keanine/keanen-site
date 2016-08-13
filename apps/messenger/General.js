var sideBoxWidth = 300;

function AddConversation()
{
    if (document.getElementById("tempConv"))
    {
        var AddConvButton = document.getElementById("tempConv");
        AddConvButton.parentNode.removeChild(AddConvButton);
    }

    document.getElementById("conversations").innerHTML += '<div class="Conversation"><div class="ConvTitle">Unnamed Conversation</div>  <div class="ConvPreview">Conversation preview</div></div>';
    document.getElementById("conversations").innerHTML += '<div id="tempConv" class="Conversation" onclick="AddConversation()"><div class="ConvTitle">Create New Conversation</div>  <div class="ConvPreview"></div></div>';

}

function ResizeMainHeight()
{
    //document.getElementById("SideBox").style.minHeight = "100%";
}