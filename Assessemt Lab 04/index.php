<?php
require "Geonames.php";

$lat = floatval($_GET["lat"]);
$lng = floatval($_GET["lng"]);

$geo = new Geonames("landeiras");
$prompt = "Localização mais próxima: ";
try {
    $place = $geo->getPlaceName($lat, $lng);
    if ($place != "Unknown") {
        $prompt .= $place;
    }
}
catch (Exception $e) {
    error_log("Error with web service: " . $e->getMessage());
}
header("Content-Type: text/plain");
echo $prompt;
?>