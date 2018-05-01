'use strict';

class Ajax {
	constructor({url = null, body = null, async = false, type = 'GET', dataType = 'HTML'} = {}) {
		this.url = url;
		this.body = body;
		this.async = async;
		this.type = type;
		this.dataType = dataType;
		this.response = {};
		this.xhr = new XMLHttpRequest();
		
		this.xhrOpen(this.xhr);
	}

	xhrOpen(xhr) {
		xhr.open(this.type, this.url, this.async);
		if (this.isGet(this.type)) {
			this.xhr.send();
			this.response = this.getResponse(this.xhr);
		} else {
			this.xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			this.xhr.send(this.getBody(this.body));
			this.response = this.getResponse(this.xhr);
		}
	}

	isGet(type) {
		return (type === 'GET') ? true : false;
	}

	getBody(body) {
		let aux = JSON.stringify(body);
		aux = aux.replace(/:/g, '=');
		aux = aux.replace(/,/g, '&');
		aux = aux.replace(/"/g, '');
		aux = aux.replace('{', '');
		aux = aux.replace('}', '');
		return aux;
	}

	getResponse(xhr) {
		if ((this.dataType.toUpperCase() === 'TEXT') || (this.dataType.toUpperCase() === 'HTML')) {
			if ((this.xhr.readyState === 4) && (this.xhr.status === 200)) {
				return this.xhr.responseText;
			} else {
				throw new Error('Code ' + this.xhr.status);
			}
		} else if (this.dataType.toUpperCase() === 'JSON') {
			if ((this.xhr.readyState === 4) && (this.xhr.status === 200)) {
				return JSON.parse(this.xhr.responseText);
			} else {
				throw new Error('Code ' + this.xhr.status);
			}
		}
	}
}