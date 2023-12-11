<?php

if(isset($_POST['submit'])) {
	$file = "times.json";
	$json_string = json_encode($_POST);
	$ret = file_put_contents($file, $json_string, LOCK_EX);
	echo 'Data Saved';
	/*echo '<pre>';
	print_r($ret);
	echo '</pre>';*/
	header("Location: index.php");
   	exit;
}
?>