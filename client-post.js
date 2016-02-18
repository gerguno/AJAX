// URLencoded
var xhrPost = function() {

	var xhr = new XMLHttpRequest(),
		body = 'name=' + encodeURIComponent(name) + 
			   '&surname=' + encodeURIComponent(surname);

	xhr.open('POST', '/submit', true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.send(body);

	xhr.onreadystatechange = function () { }
}

// Multipart

// FormData
var xhrPost = function() {

	// создать объект для формы
	var formData = new FormData(document.forms.person);

	// добавить JavaScript file-like object
	var content = '<a id="a"><b id="b">hey!</b></a>'; // the body of the new file...
	var blob = new Blob([content], { type: "text/xml"});
	formData.append("webmasterfile", blob);

	// добавить к пересылке ещё пару ключ - значение
	formData.append("patronym", "Робертович");

	// отослать
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/url");
	xhr.send(formData);

	xhr.onreadystatechange = function () { }
}