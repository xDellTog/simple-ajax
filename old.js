function Ajax (url, data, dataType, type, async) {
	this.url = url;
	this.type = type;
	this.dataType = dataType;
	this.data = data;
	this.async = async;
	this.construct = function() {
		if (this.dataType === undefined) this.dataType = this.dataType || 'json';
		if (this.type === undefined) this.type = this.type || 'POST';
		if (this.async === undefined) this.async = this.async || false;
		this.convertData();
	};
	this.create = function() {
		this.construct();

		var xhttp = new XMLHttpRequest();

		xhttp.open(this.type, this.url, this.async);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				console.log(xhttp.responseText);
			}		
		}

		xhttp.send(this.data);
	};
	this.convertData = function() {
		this.data = JSON.stringify(this.data).replace(/:/g, '=');
		this.data = this.data.replace(/,/g, '&');
		this.data = this.data.replace(/"/g, '');
		this.data = this.data.replace('{', '');
		this.data = this.data.replace('}', '');
		console.log(this.data);
	}
}
