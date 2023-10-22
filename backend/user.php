<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin:*'); 
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header("Content-Type: application/json; charset=UTF-8");
// Path to the JSON file
$jsonFilePath = '../data/mock.json';

// Read the JSON data from the file
$jsonData = file_get_contents($jsonFilePath);

// Check if the file was read successfully
if ($jsonData === false) {
    http_response_code(500);
    exit('Error reading the JSON file');
}

// Decode the JSON string into an associative array
$dataArray = json_decode($jsonData, true);

// Check if JSON decoding was successful
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(500);
    exit('Error decoding the JSON data');
}

// Extract the first name
$firstName = $dataArray['tickets'][0]['traveller']['firstName'];

// Convert the first name back into a JSON string
$jsonResponse = json_encode(['firstName' => $firstName]);

// Set the content type to JSON for the response
header('Content-Type: application/json');

// Return the JSON response
echo $jsonResponse;
?>
