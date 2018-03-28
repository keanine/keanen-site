  var vidID = "";
  
  /***** START BOILERPLATE CODE: Load client library, authorize user. *****/

  // Global variables for GoogleAuth object, auth status.
  var GoogleAuth;

  /**
   * Load the API's client and auth2 modules.
   * Call the initClient function after the modules load.
   */
  function handleClientLoad() {
    gapi.load('client:auth2', initClient);
  }

  function initClient() {
    // Initialize the gapi.client object, which app uses to make API requests.
    // Get API key and client ID from API Console.
    // 'scope' field specifies space-delimited list of access scopes

    gapi.client.init({
        'clientId': '132484806299-sjjkhh07be2h6s6l1h1uuvl7lrudh1s5.apps.googleusercontent.com',
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
        'scope': 'https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner'
    }).then(function () {
      GoogleAuth = gapi.auth2.getAuthInstance();

      // Listen for sign-in state changes.
      GoogleAuth.isSignedIn.listen(updateSigninStatus);

      // Handle initial sign-in state. (Determine if user is already signed in.)
      setSigninStatus();

      // Call handleAuthClick function when user clicks on "Authorize" button.
      $('#execute-request-button').click(function() {
        handleAuthClick(event);
      }); 
    });
  }

  function handleAuthClick(event) {
    // Sign user in after click on auth button.
    GoogleAuth.signIn();
  }

  function setSigninStatus() {
    var user = GoogleAuth.currentUser.get();
    isAuthorized = user.hasGrantedScopes('https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner');
    // Toggle button text and displayed statement based on current auth status.
    if (isAuthorized) {
      defineRequest();
    }
  }

  function updateSigninStatus(isSignedIn) {
    setSigninStatus();
  }

  function createResource(properties) {
    var resource = {};
    var normalizedProps = properties;
    for (var p in properties) {
      var value = properties[p];
      if (p && p.substr(-2, 2) == '[]') {
        var adjustedName = p.replace('[]', '');
        if (value) {
          normalizedProps[adjustedName] = value.split(',');
        }
        delete normalizedProps[p];
      }
    }
    for (var p in normalizedProps) {
      // Leave properties that don't have values out of inserted resource.
      if (normalizedProps.hasOwnProperty(p) && normalizedProps[p]) {
        var propArray = p.split('.');
        var ref = resource;
        for (var pa = 0; pa < propArray.length; pa++) {
          var key = propArray[pa];
          if (pa == propArray.length - 1) {
            ref[key] = normalizedProps[p];
          } else {
            ref = ref[key] = ref[key] || {};
          }
        }
      };
    }
    return resource;
  }

  function removeEmptyParams(params) {
    for (var p in params) {
      if (!params[p] || params[p] == 'undefined') {
        delete params[p];
      }
    }
    return params;
  }

  function executeRequest(request) {
    request.execute(function(response) {
        console.log(response);
        
        if (document.documentMode || /Edge/.test(navigator.userAgent)) {
          vidID = gup('v', window.location.href) 

          if(gup('s', window.location.href) == 'off')
            html.style.setProperty("--sidebarSize", "0px");
          else
            html.style.setProperty("--sidebarSize", "300px");
        }
        else
        {
          var url = new URL(window.location.href);
          vidID = url.searchParams.get("v");

          if(url.searchParams.get("s") == 'off')
            html.style.setProperty("--sidebarSize", "0px");
          else
            html.style.setProperty("--sidebarSize", "300px");  
        }

        var html = document.getElementsByTagName('html')[0];
        var sidebar = "";
        if (html.style.getPropertyValue('--sidebarSize') == 0)
        sidebar = "off";

        var items = response.items;
        document.getElementById("page-comments").innerHTML = "";
        for (i = 0; i < items.length; i++)
            CreateRelatedVideo("page-comments", items[i].snippet.thumbnails.medium.url, items[i].snippet.title, items[i].snippet.channelTitle, "http://www.keanencollins.co.uk/apps/YouTube/watch?v=" + items[i].id.videoId + "&s=" + sidebar);
            
    });
  }

  function buildApiRequest(requestMethod, path, params, properties) {
    params = removeEmptyParams(params);
    var request;
    if (properties) {
      var resource = createResource(properties);
      request = gapi.client.request({
          'body': resource,
          'method': requestMethod,
          'path': path,
          'params': params
      });
    } else {
      request = gapi.client.request({
          'method': requestMethod,
          'path': path,
          'params': params
      });
    }
    executeRequest(request);
  }

  /***** END BOILERPLATE CODE *****/

  
  function defineRequest() {
    // See full sample for buildApiRequest() code, which is not 
// specific to a particular API or API method.

/*buildApiRequest('GET',
                '/youtube/v3/subscriptions',
                {'mine': 'true',
                 'part': 'snippet,contentDetails',
                 'maxResults': '50'});*/
buildApiRequest('GET',
                '/youtube/v3/search',
                {'part': 'snippet',
                 'relatedToVideoId': vidID,
                 'type': 'video',
                'maxResults': '21'});

  }

function CreateRelatedVideo(elementId, thumbnail, title, channel, url)
{
    //document.getElementById(elementId).innerHTML += '<div class="relatedVideo"><img src=' + thumbnail +' class="relatedVideoThumbnail"></img>' + title + '</div>'
  
    document.getElementById(elementId).innerHTML += 
    '<div class="relatedVideo">' +
    '<a href="' + url + '"><img src="' + thumbnail + '" class="relatedVideoThumbnail"></img></a>' + 
    '<a href="' + url + '">' + title + '</a>' + 
    '</div>'
}

function LoadVideo()
{
  var html = document.getElementsByTagName('html')[0];


  if (document.documentMode || /Edge/.test(navigator.userAgent)) {
    vidID = gup('v', window.location.href) 

    if(gup('s', window.location.href) == 'off')
      html.style.setProperty("--sidebarSize", "0px");
    else
      html.style.setProperty("--sidebarSize", "300px");
  }
  else
  {
    var url = new URL(window.location.href);
    vidID = url.searchParams.get("v");

    if(url.searchParams.get("s") == 'off')
      html.style.setProperty("--sidebarSize", "0px");
    else
      html.style.setProperty("--sidebarSize", "300px");  
  }

  console.log(vidID);
  console.log(html.style.getPropertyValue("--sidebarSize"));
    document.getElementById("videoIframe").src = "https://www.youtube.com/embed/" + vidID + "?autoplay=1";
}

function gup( name, url ) {
  if (!url) url = location.href;
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( url );
  return results == null ? null : results[1];
}