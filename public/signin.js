/**
 * FirebaseUI initialization to be used in a Single Page application context.
 */
// FirebaseUI config.
var uiConfig = {
    // Opens IDP Providers sign-in flow in a popup.
    'signInSuccessUrl': './index.html',
    'signInOptions': [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    'tosUrl': 'https://www.google.com'
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// Keep track of the currently signed in user.
var currentUid = null;

ui.start('#firebaseui-container', uiConfig);
