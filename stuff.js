var Oles = {
	name: "Oles",
	addKey: function(_this) {
		for (key in _this) {
			this[key] = _this[key];
		}
	}
}

Oles.addKey({ surname: "Gergun", mobile: "+380931562306"});
console.log(Oles);