<?php
header('Content-Type:application/json');
$jsonData = file_get_contents("games.json");
$json = json_decode($jsonData, true);
//print_r($json);
echo json_encode($json);
//echo $jsonData;
exit;