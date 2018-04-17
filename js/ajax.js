'use strict';

const $ = document.querySelector.bind(document);

function Ajax(set) {
	
	this.response = {};

	let url = set.url || null;
	let body = set.body || null;
	let async = set.async || false;
	let type = set.type.toUpperCase() || 'GET';
	let dataType = set.dataType.toUpperCase() || 'HTML';
	let xhr = new XMLHttpRequest();

	if (url !== null) {
		xhr.open(type, url, async);
		if (type === 'GET') {
			xhr.send();
			getDataType(this,xhr);
		} else if (type === 'POST') {
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhr.send(transform(body));
			getDataType(this,xhr);
		}	
	} else {
		throw new Error('URL null');
	}

	function transform(body) {
		let aux = JSON.stringify(body);
		aux = aux.replace(/:/g, '=');
		aux = aux.replace(/,/g, '&');
		aux = aux.replace(/"/g, '');
		aux = aux.replace('{', '');
		aux = aux.replace('}', '');
		return aux;
	}

	function getDataType(that,xhr) {
		if ((dataType === 'TEXT') || (dataType === 'HTML')) {
			if ((xhr.readyState === 4) && (xhr.status === 200)) {
				that.response = xhr.responseText;
			} else {
				throw new Error('Code ' + xhr.status);
			}
		} else if (dataType === 'JSON') {
			if ((xhr.readyState === 4) && (xhr.status === 200)) {
				that.response = JSON.parse(xhr.responseText);
			} else {
				throw new Error('Code ' + xhr.status);
			}
		}
	}
}