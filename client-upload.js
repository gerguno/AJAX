document.forms.upload.onsubmit = function() {
	var input = this.elements.myfile;
	var file = input.files[0];
	if (file) {
		upload(file);
	}
	return false;
}

function upload(file) {
	var xhr = new XMLHttpRequest();

	xhr.upload.onprogress = function(event) {
		console.log(event.loaded + ' /' + event.total);
	}

	xhr.onload = xhr.onerror = function() {
		if (this.status == 200) {
		  console.log("success");
		} else {
		  console.log("error " + this.status);
		}
	}

	xhr.open('POST', 'node/uploads', true);
	var formData = new FormData();
	formData.append("thefile", file);
	xhr.send(formData);
}