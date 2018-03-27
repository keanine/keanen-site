
function onJSClientLoad()
{
    getChannel();
}

function getChannel() 
{
    gapi.client.youtube.channels.list({
        'part': 'snippet,contentDetails,statistics',
        'forUsername': 'Keanine3000'
    }).then(function(response) {
    var channel = response.result.items[0];
    appendPre('This channel\'s ID is ' + channel.id + '. ' +
                    'Its title is \'' + channel.snippet.title + '\', ' +
                    'and it has ' + channel.statistics.viewCount + ' views.');
    });
}