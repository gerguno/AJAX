var xhrGetDomain = function() {

	// var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest,
	// 	xhr = new XHR();

	// xhr.withCredentials = true;
	// xhr.open('GET', 'http://www.tumblr.com', true);	
	// xhr.send();

	// xhr.onreadystatechange = function () { 
	// 	if (xhr.status == 200) {
	// 		console.log(xhr.responseText);
	// 	} else {
	// 		alert(xhr.status + ": " + xhr.statusText);
	// 	}
	// }

	var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

	var xhr = new XHR();

	// (2) запрос на другой домен :)
	xhr.withCredentials = true;
	xhr.open('GET', 'http://www.google.com', true);

	xhr.onload = function() {
	  alert( this.responseText );
	}

	xhr.onerror = function() {
	  alert( 'Ошибка ' + this.status );
	}

	xhr.send();
}