'use strict';

class Ajax {
	constructor({url = null, body = null, async = false, type = 'GET', dataType = 'HTML'} = {}) {
		this.response = {};
		this.xhr = new XMLHttpRequest();

		if (url !== null) {
			this.xhr.open(type, url, async);
			if (type === 'GET') {
				this.xhr.send();
				this.response = this.getResponse(arguments, this.xhr);
			} else if (type === 'POST') {
				this.xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				this.xhr.send(this.transform(body));
				this.response = this.getResponse(arguments, this.xhr);
			}	
		} else {
			throw new Error('URL null');
		}
	}

	transform(body) {
		let aux = JSON.stringify(body);
		aux = aux.replace(/:/g, '=');
		aux = aux.replace(/,/g, '&');
		aux = aux.replace(/"/g, '');
		aux = aux.replace('{', '');
		aux = aux.replace('}', '');
		return aux;
	}

	getResponse(args, ...xhr) {
		let arg = args[0];
		
		if ((arg.dataType.toUpperCase() === 'TEXT') || (arg.dataType.toUpperCase() === 'HTML')) {
			if ((this.xhr.readyState === 4) && (this.xhr.status === 200)) {
				return this.xhr.responseText;
			} else {
				throw new Error('Code ' + this.xhr.status);
			}
		} else if (arg.dataType.toUpperCase() === 'JSON') {
			if ((this.xhr.readyState === 4) && (this.xhr.status === 200)) {
				return JSON.parse(this.xhr.responseText);
			} else {
				throw new Error('Code ' + this.xhr.status);
			}
		}
	}
}