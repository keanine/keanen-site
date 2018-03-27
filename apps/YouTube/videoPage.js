//AIzaSyAh8VJaUj7tQHZxiLw8zIRywHgAmqL1c1Y
//var channelName = "error";
/*document.addEventListener('DOMContentLoaded', function() { //alert("Ready!"); }, false);*/

(function()
{
    var OAUTH_CLIENT_ID = '132484806299-sjjkhh07be2h6s6l1h1uuvl7lrudh1s5.apps.googleusercontent.com';
    var OAUTH_SCOPES = ['https://www.googleapis.com/auth/youtube',
                        'https://www.googleapis.com/auth/youtube.force-ssl',
                        'https://www.googleapis.com/auth/youtube.readonly',
                        'https://www.googleapis.com/auth/youtube.upload',
                        'https://www.googleapis.com/auth/youtubepartner',
                        'https://www.googleapis.com/auth/youtubepartner-channel-audit'];

    window.onJSClientLoad = function()
    {
        gapi.auth.init(function()
        {
            window.setTimeout(checkAuth, 1);
        });
    };

    function checkAuth()
    {
        gapi.auth.authorize(
        {
            client_id : OAUTH_CLIENT_ID,
            scope : OAUTH_SCOPES,
            immediate : true

        }, handleAuthResult);
    }

    function handleAuthResult(authResult)
    {
        if(authResult)
        {
            $('.pre-auth').hide();
            $('post-auth').show();
        }
        else
        {
            $('.pre-auth').show();
            $('post-auth').hide();
            $('#login-link')
        }
    }

})();

function Start()
{
    var request = gapi.client.youtube.search.list({
        part: "snippet",
        type: "video",
        q: "vsauce",
        maxResults: 5,
        order: "viewCount"
    });
    document.getElementById("results").innerText = "TEST";

    request.execute(function(response)
    {
        console.log(response);
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