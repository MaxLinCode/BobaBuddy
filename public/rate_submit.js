/**
 * Loads all values REAL TIME!!!!
 */
var database = firebase.database();
var drinksRef = database.ref().child("drinks");
var userRatingRef = database.ref();
drinksRef.on('value', function(snapshot) {
	var myteas = snapshot.val();
	var options = '';
	for (var i = 0; i < myteas.length; i++) {
		options += '<option value="' + myteas[i] + '" />';
	}

	document.getElementById('teas').innerHTML = options;

	// On drink change, users ratings list has to add another rating of "-1"
});


function submitRating() {
	var form = document.getElementById("form1");
	console.log(form.myteas.option.data('id'));
	console.log(form.rating.value);

}
