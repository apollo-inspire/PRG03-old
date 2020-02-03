<?php
$jsonData = file_get_contents('http://swapi.co/api/films/');
$data = json_decode($jsonData);
print_r($data);
