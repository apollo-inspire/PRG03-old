<?php
$jsonData = file_get_contents("games.json");


// Om de data in PHP te kunnen bewerken gebruik je json_decode
// $json = json_decode($jsonData, true);
// print_r($json);
// Als je klaar bent met bewerken gebruik je json_encode
// echo json_encode($json);


// verstuur json met de juiste header
header('Content-Type:application/json');
echo $jsonData;
exit;