var GoogleAuth;
  var SCOPE = 'https://www.googleapis.com/auth/drive.appfolder';
  function handleClientLoad() {
    // Load the API's client and auth2 modules.
    // Call the initClient function after the modules load.
    gapi.load('client:auth2', initClient);
  }

  function initClient() {
    // Retrieve the discovery document for version 3 of YouTube Data API.
    // In practice, your app can retrieve one or more discovery documents.
    var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';

    // Initialize the gapi.client object, which app uses to make API requests.
    // Get API key and client ID from API Console.
    // 'scope' field specifies space-delimited list of access scopes.
    gapi.client.init({
        'apiKey': 'AIzaSyDN6-4g_J1LpvWvMV6JCyxqqS-VJnAabaU',
        'discoveryDocs': [discoveryUrl],
        'clientId': '198183551607-brp8k6mtndp38ea641e4d04795uns8dl.apps.googleusercontent.com',
        'scope': SCOPE
    }).then(function () {
      GoogleAuth = gapi.auth2.getAuthInstance();

      // Listen for sign-in state changes.
      GoogleAuth.isSignedIn.listen(updateSigninStatus);

      // Handle initial sign-in state. (Determine if user is already signed in.)
      var user = GoogleAuth.currentUser.get();
      setSigninStatus();

      // Call handleAuthClick function when user clicks on
      //      "Sign In/Authorize" button.
      $('#execute-request-button').click(handleAuthClick);
      $('#revoke-access-button').click(revokeAccess);
    });
  }

  function handleAuthClick() {
    if (GoogleAuth.isSignedIn.get()) {
      if(confirm("Are you sure you want to sign out of ShuffleTube?")){
        // User is authorized and has clicked 'Sign out' button.
        GoogleAuth.signOut();
      }
    } else {
      // User is not signed in. Start Google auth flow.
      GoogleAuth.signIn();
    }
  }

  function revokeAccess() {
    GoogleAuth.disconnect();
  }

  function updateSigninStatus(isSignedIn) {
    setSigninStatus();
  }
