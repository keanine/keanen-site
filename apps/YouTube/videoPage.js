//AIzaSyAh8VJaUj7tQHZxiLw8zIRywHgAmqL1c1Y
//var channelName = "error";

document.addEventListener('DOMContentLoaded', function() {
    //alert("Ready!");
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
        console.log(response);
        document.getElementById("results").innerText = "TEST";
    });

    GetChannelName();
    //document.getElementById("channelName").innerText = channelName;
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
        alert("YouTube API Ready!");
    });
    
    Start();
}