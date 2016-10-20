/**
 * Submit Rating
 */
function submitRating() {
	var form = document.getElementById("form1");
	console.log(form.myteas.value);
	console.log(form.rating.value);
}


/**
 * Displays the UI for a signed in user.
 */
var handleSignedInUser = function(user) {

    currentUid = user.uid;
    document.getElementById('name').textContent = user.displayName;
    document.getElementById('email').textContent = user.email;

    if (user.photoURL) {
        document.getElementById('photo').src = user.photoURL;
        document.getElementById('photo').style.display = 'block';
    } else {
        document.getElementById('photo').style.display = 'none';
    }

    var usersRef = database.ref('users');

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
    // redirects to sign in
    window.location.href="../signin.html"
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

    user ? handleSignedInUser(user) : handleSignedOutUser();
});

/**
 * Initializes the app.
 */
var initApp = function() {
    document.getElementById('sign-out').addEventListener('click', function() {
        firebase.auth().signOut();
    });

    document.getElementById('rate').addEventListener('click', function() {
        window.location.href="../rating.html"
    });

};

window.addEventListener('load', initApp);
