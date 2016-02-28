//Объект EventSource предназначен для передачи текстовых сообщений с сервера, используя обычный протокол HTTP.

var eventSource;

    function start() { // при нажатии на Старт

      if (!window.EventSource) {
        alert('В этом браузере нет поддержки EventSource.');
        return;
      }

      eventSource = new EventSource('digits');

      eventSource.onopen = function(e) {
        log("Соединение открыто");
      };

      eventSource.onerror = function(e) {
        if (this.readyState == EventSource.CONNECTING) {
          log("Соединение порвалось, пересоединяемся...");
        } else {
          log("Ошибка, состояние: " + this.readyState);
        }
      };

      eventSource.addEventListener('bye', function(e) {
        log("Bye: " + e.data);
      }, false);

      eventSource.onmessage = function(e) {
        console.log(e);
        log(e.data);
      };
    }

    function stop() { // при нажатии на Стоп
      eventSource.close();
      log("Соединение завершено");
    }

    function log(msg) {
      logElem.innerHTML += msg + "<br>";
    }
    