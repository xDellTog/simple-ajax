'use strict';

const $ = function(selector) {
	return document.querySelector(selector);
}

function Ajax(set) {

	let xhr = new XMLHttpRequest();

	this.response = {};

	this.url		= set.url 		|| null;
	this.body		= set.body 		|| null;
	this.async		= set.async 	|| false;
	this.type		= set.type 		|| 'GET';
	this.dataType	= set.dataType 	|| 'html';

	this.transform = function (body) {
		var aux = JSON.stringify(body);
		aux = aux.replace(/:/g, '=');
		aux = aux.replace(/,/g, '&');
		aux = aux.replace(/"/g, '');
		aux = aux.replace('{', '');
		aux = aux.replace('}', '');
		return aux;
	}

	this.getDataType = function(xhr) {
		if ((this.dataType === 'txt') || (this.dataType === 'html')) {
			if ((xhr.readyState === 4) && (xhr.status === 200)) {
				this.response = xhr.responseText;
			} else {
				console.log('error');
			}
		} else if (this.dataType === 'json') {
			if ((xhr.readyState === 4) && (xhr.status === 200)) {
				this.response = JSON.parse(xhr.responseText);
			} else {
				console.log('error');
			}
		}
	}

	if (this.url !== null) {
		xhr.open(this.type, this.url, this.async);
		if (this.type === 'GET') {
			xhr.send();
			this.getDataType(xhr);
		} else if (this.type === 'POST') {
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhr.send(this.transform(this.body));
			this.getDataType(xhr);
		}	
	} else {
		console.log('error');
	}
}