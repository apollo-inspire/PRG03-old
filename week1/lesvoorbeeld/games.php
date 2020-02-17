<?php
header('Content-Type:application/json');
$jsonData = file_get_contents("games.json");

// Om de data in PHP te kunnen bewerken gebruik je json_decode
// Als je klaar bent met bewerken gebruik je json_encode voordat je het verstuurt
// $json = json_decode($jsonData, true);
// print_r($json);
// echo json_encode($json);

echo $jsonData;
exit;