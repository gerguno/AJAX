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

		 if (xhr.status != 200) {
		 	alert(xhr.status + ':' + xhr.statusText);
		 } else {
		 	alert(xhr.responseText);
		 }
	}

	button.innerHTML = 'Loading...';
	button.disabled = true;

}