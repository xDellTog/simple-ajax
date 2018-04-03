<?php
	$arr = array();

	switch ($_POST["acao"]) {
		case 'PostHtml':
			echo($_POST["nome"]);
			echo($_POST["email"]);	
			break;
		case 'PostJson':
			$arr["nome"] = $_POST["nome"];
			$arr["email"] = ($_POST["email"]);
			echo json_encode($arr);
			break;
		default:
			echo 'jooj';
			break;
	}
?>