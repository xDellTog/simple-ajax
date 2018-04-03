<?php
	$arr = array();

	switch ($_POST["opt"]) {
		case 'HTML':
			echo "<h1> Loaded by POST HTML </h1>";
			break;
		case 'TXT':
			echo "Hello World!";
			break;
		case 'JSON':
			$arr["Data"] = $_POST["Data"];
			$arr["Name"] = ($_POST["Name"]);
			echo json_encode($arr);
			break;
		default:
			echo 'Invalid option!';
			break;
	}
?>