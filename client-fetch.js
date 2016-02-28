// Метод fetch – это XMLHttpRequest нового поколения. 
// Он предоставляет улучшенный интерфейс для осуществления запросов к серверу: 
// как по части возможностей и контроля над происходящим, так и по синтаксису, 
// так как построен на промисах.
// http://learn.javascript.ru/fetch

function testFetch() {

	fetch('/node/files/phones.json')
		.then(function(response) {
			alert(response.headers.get('Content-Type'));
			alert(response.status);
			return response.json();
		})
		.then(function(phones) {
			alert(JSON.stringify(phones));
		})
		.catch(alert);
	
}