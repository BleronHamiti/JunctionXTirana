<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin:*'); 
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header("Content-Type: application/json; charset=UTF-8");
$dataFilePath = "../data/mock.json";  // Adjust path if needed

function getKilometers($dataFilePath) {
    $data = json_decode(file_get_contents($dataFilePath), true);
    return $data['user']['flightKm'];
}

function getFlightDetails($dataFilePath) {
    $data = json_decode(file_get_contents($dataFilePath), true);
    $flightDetails = [
        "origin" => "a",
        "destination" => "b"
    ];
    if(isset($data['tickets'][0]['bookedSegments'][0])) {
        $segment = $data['tickets'][0]['bookedSegments'][0];
        $flightDetails["origin"] = $segment['origin'];
        $flightDetails["destination"] = $segment['destination'];
    }
    return $flightDetails;
}

function addKilometersForBooking($bookingReference, $dataFilePath) {
    $data = json_decode(file_get_contents($dataFilePath), true);
    $travelDistance = 0;

    if ($data['bookingReference'] === $bookingReference && isset($data['tickets'][0]['bookedSegments'])) {
        foreach($data['tickets'][0]['bookedSegments'] as $segment) {
            $travelDistance += $segment['TravelDistance'];
        }

        $data['user']['flightKm'] += $travelDistance;
        file_put_contents($dataFilePath, json_encode($data));
    }

    return $travelDistance;
}


$requestMethod = $_SERVER["REQUEST_METHOD"];
switch($requestMethod) {
    case "GET":
        if (isset($_GET['details']) && $_GET['details'] === 'flight') {
            echo json_encode(getFlightDetails($dataFilePath));
        } else {
            echo json_encode(["kilometers" => getKilometers($dataFilePath)]);
        }
        break;
    case "POST":
        $inputJSON = file_get_contents('php://input');
        $input = json_decode($inputJSON, TRUE);
        if(isset($input['bookingReference'])) {
            $addedKm = addKilometersForBooking($input['bookingReference'], $dataFilePath);
            if($addedKm > 0) {
                echo json_encode(["status" => "success", "addedKilometers" => $addedKm]);
            } else {
                echo json_encode(["status" => "error", "message" => "Booking reference not found or no kilometers to add."]);
            }
        } else {
            echo json_encode(["status" => "error", "message" => "Invalid input"]);
        }
        break;
    default:
        echo json_encode(["status" => "error", "message" => "Invalid request method"]);
        break;
}
?>
