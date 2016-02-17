var xhrGet = function() {

	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'node/files/phones.json', true);
	xhr.send();

	xhr.onreadystatechange = function () {
		 // 4 означає DONE
		 // const unsigned short UNSENT = 0; // начальное состояние
		 // const unsigned short OPENED = 1; // вызван open
		 // const unsigned short HEADERS_RECEIVED = 2; // получены заголовки
	  	 // const unsigned short LOADING = 3; // загружается тело (получен очередной пакет данных)
	 	 // const unsigned short DONE = 4; // запрос завершён
		 if (xhr.readyState != 4) return;

		 button.innerHTML = 'Done!';

		 if (xhr.status == 200) {
		 	console.log(xhr.responseText);
		 	createList(xhr.responseText);
		 } else {
		 	alert(xhr.status + ':' + xhr.statusText);
		 }
	}

	button.innerHTML = 'Loading...';
	button.disabled = true;

}

function createList(json) {
	var obj = JSON.parse(json),
		ul = document.createElement('ul');
	obj.forEach(function(phone) {
		var li = document.createElement('li');
		li.innerText = phone.name;
		ul.appendChild(li);
	});
	document.body.appendChild(ul);
}