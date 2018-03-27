//AIzaSyAh8VJaUj7tQHZxiLw8zIRywHgAmqL1c1Y
var channelName = "error";

document.addEventListener('DOMContentLoaded', function() {
    //alert("Ready!");
    Start();
}, false);


function Start()
{
    // Loads the JavaScript client library and invokes `start` afterwards.
    gapi.load('client', startAPI);


    GetChannelName();
    document.getElementById("channelName").innerText = channelName;
}

function startAPI()
{
    // Initializes the client with the API key and the Translate API.
    gapi.client.init({
        'apiKey': 'AIzaSyAh8VJaUj7tQHZxiLw8zIRywHgAmqL1c1Y',
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/translate/v2/rest'],
    }).then(function() {
    // Executes an API request, and returns a Promise.
    // The method name `language.translations.list` comes from the API discovery.
    return gapi.client.language.translations.list({
        q: 'hello world',
        source: 'en',
        target: 'de',
        });
    }).then(function(response) {
        console.log(response.result.data.translations[0].translatedText);
    }, function(reason) {
        console.log('Errorre: ' + reason.result.error.message);
        document.getElementById("results").innerText = 'Error: ' + reason.result.error.message;
    });
};

function GetChannelName()
{
    channelName = "Vsauce";
}