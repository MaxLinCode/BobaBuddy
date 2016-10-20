function submitRating() {
	var form = document.getElementById("form1");
	console.log(form.myteas.option.data('id'));
	console.log(form.rating.value);
}
