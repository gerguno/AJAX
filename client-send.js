var xhrPost = function() {

	var xhr = new XMLHttpRequest(),
		body = 'name=' + encodeURIComponent(name) + 
			   '&surname=' + encodeURIComponent(surname);

	xhr.open('POST', '/submit', true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.send(body);

	xhr.onreadystatechange = function () { }
}