const $ = document.querySelector.bind(document);
const app = window;

app.onload = function() {
	console.log('ready!');

	$('#btnListar').onclick = function(ev) {
		ev.preventDefault();
		console.log('btnListarClicked');
		let ajax = new Ajax();
		let data = {
			nome: 'Daniel',
			senha: 'Senha',
			sexo: 'Masculino'
		};
		ajax.create('POST', 'main.php', true, data);
	}



/*
	$('#btnListar').on('click', function(event) {
		event.preventDefault();
		$('#lista').empty();
		$.ajax({
			url: '../php/Main.php',
			type: 'POST',
			dataType: 'json',
			data: { acao: 'listar' },
		})
		.done(function(json) {
			if (json.result) {
				$('#lista').append(json.data);
			} else {
				alert(json.message);
			}
		})
		.fail(function(xhr) {
			console.log(xhr.responseText);
		})
	});

	$('#btnCadastrar').on('click', function(event) {
		event.preventDefault();
		$.ajax({
			url: '../php/Main.php',
			type: 'POST',
			dataType: 'json',
			data: {
				acao: 'insert',
				nome: $('#txtNome').val(),
				email: $('#txtEmail').val(),
				sexo: $('#txtSexo').val()
			},
		})
		.done(function(json) {
			if (json.result) {
				alert(json.message);
			} else {
				alert(json.message);
			}
		})
		.fail(function(xhr) {
			console.log(xhr.responseText);
		})
	});
*/
}