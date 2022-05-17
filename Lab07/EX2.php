<?php
    //Create a two-dimensional world city array
    $worldCities = array(
        array("New York", "NY", "USA"),
        array("Los Angeles", "CA", "USA"),
        array("Chicago", "IL", "USA"),
        array("Houston", "TX", "USA"),
        array("Philadelphia", "PA", "USA"),
        array("Phoenix", "AZ", "USA"),
        array("San Antonio", "TX", "USA"),
        array("San Diego", "CA", "USA"),
        array("Dallas", "TX", "USA"),
        array("San Jose", "CA", "USA"),
        array("Tokyo", "JP", "Japan"),
        array("Shanghai", "CN", "China"),
        array("Beijing", "CN", "China"),
        array("Seoul", "KR", "South Korea"),
        array("Mexico City", "MX", "Mexico"),
        array("Mumbai", "IN", "India"),
        array("Delhi", "IN", "India"),
        array("Cairo", "EG", "Egypt"),
        array("Moscow", "RU", "Russia"),
        array("Istanbul", "TR", "Turkey"),
        array("Karachi", "PK", "Pakistan"),
        array("Dhaka", "BD", "Bangladesh"),
        array("Lagos", "NG", "Nigeria"),
        array("London", "GB", "United Kingdom"),
        array("Lima", "PE", "Peru"),
        array("Buenos Aires", "AR", "Argentina"),
        array("Cairo", "EG", "Egypt"),
        array("Moscow", "RU", "Russia"),
        array("Istanbul", "TR", "Turkey"),
        array("Karachi", "PK", "Pakistan"),
        array("Dhaka", "BD", "Bangladesh"),
        array("Lagos", "NG", "Nigeria"),
        array("London", "GB", "United Kingdom"),
        array("Lima", "PE", "Peru"),
        array("Buenos Aires", "AR", "Argentina"),
        array("Cairo", "EG", "Egypt"),
        array("Moscow", "RU", "Russia"),
        array("Istanbul", "TR", "Turkey"),
        array("Karachi", "PK", "Pakistan"),
        array("Dhaka", "BD", "Bangladesh"),
        array("Lagos", "NG", "Nigeria"),
        array("London", "GB", "United Kingdom"),
        array("Lima", "PE", "Peru"),
        array("Buenos Aires", "AR", "Argentina"),
        array("Cairo", "EG", "Egypt"));
    
    //Print $worldCities
    foreach ($worldCities as $city) {
        echo $city[0] . " from " . $city[1] . " is in " . $city[2] . "<br>";
    }
?>