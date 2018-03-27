//AIzaSyAh8VJaUj7tQHZxiLw8zIRywHgAmqL1c1Y
var channelName = "error";

document.addEventListener('DOMContentLoaded', function() {
    //alert("Ready!");
    init();
    Start();
}, false);


function Start()
{
    var request = gapi.client.youtube.search.list({
        part: "snippet",
        type: "video",
        q: "vsauce",
        maxResults: 5,
        order: "viewCount"
    });

    request.execute(function(response)
    {
        document.getElementById("results").innerText = response;
    });

    GetChannelName();
    document.getElementById("channelName").innerText = channelName;
}

function GetChannelName()
{
    channelName = "Vsauce";
}

function init()
{
    gapi.client.setApiKey("AIzaSyAh8VJaUj7tQHZxiLw8zIRywHgAmqL1c1Y");
    gapi.client.load("youtube", "v3", function()
    {
        //alert("YouTube API Ready!");
    });
}