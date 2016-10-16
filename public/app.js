/**
 * FirebaseUI initialization to be used in a Single Page application context.
 */
// FirebaseUI config.
var uiConfig = {
    // Opens IDP Providers sign-in flow in a popup.
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

/**
 * Displays the UI for a signed in user.
 */
var handleSignedInUser = function(user) {

    currentUid = user.uid;
    document.getElementById('user-signed-in').style.display = 'block';
    document.getElementById('user-signed-out').style.display = 'none';
    document.getElementById('name').textContent = user.displayName;
    document.getElementById('email').textContent = user.email;

    if (user.photoURL) {
        document.getElementById('photo').src = user.photoURL;
        document.getElementById('photo').style.display = 'block';
    } else {
        document.getElementById('photo').style.display = 'none';
    }

    var usersRef = database.ref().child('users');

    usersRef.once('value').then(function(snapshot) {
        // dots are illegal
        // dots replaced with commas
        var userEmail = user.email.replace('.', ',');
        // check if user key doesn't exist
        if (!snapshot.val().hasOwnProperty(userEmail)) {
            // brackets indicate "computed property name"
            var userObject = {
                [userEmail]: [-1, -1, -1, -1, -1, -1, -1]
            }
            usersRef.update(userObject);
        }
    });

};


/**
 * Displays the UI for a signed out user.
 */
var handleSignedOutUser = function() {
    document.getElementById('user-signed-in').style.display = 'none';
    document.getElementById('user-signed-out').style.display = 'block';
    ui.start('#firebaseui-container', uiConfig);
};

// Listen to change in auth state so it displays the correct UI for when
// the user is signed in or not.
firebase.auth().onAuthStateChanged(function(user) {
    // The observer is also triggered when the user's token has expired and is
    // automatically refreshed. In that case, the user hasn't changed so we should
    // not update the UI.
    if (user && user.uid == currentUid) {
        return;
    }
    //document.getElementById('loading').style.display = 'none';
    //document.getElementById('loaded').style.display = 'block';
    user ? handleSignedInUser(user) : handleSignedOutUser();
});

/**
 * Initializes the app.
 */
var initApp = function() {
    document.getElementById('sign-out').addEventListener('click', function() {
        firebase.auth().signOut();
    });

};

window.addEventListener('load', initApp);
