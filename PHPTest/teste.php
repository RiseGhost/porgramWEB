<style>
    table, th, tr, td {
        border: 1px solid black;
        border-collapse: collapse;
    }

    th, td {
        padding: 5px 30px;
    }
</style>

<?php
    $apiKey = "PUT_YOUR_API_KEY_HERE";
    $ips = array("3.3.3.3", "4.4.4.4", "5.5.5.5", "6.6.6.6", "7.7.7.7");

    echo "<table>";
    echo "<tr>";
    echo "<th>IP</th>";
    echo "<th>Continent</th>";
    echo "<th>Country</th>";
    echo "<th>Organization</th>";
    echo "<th>ISP</th>";
    echo "<th>Languages</th>";
    echo "<th>Is EU Member?</th>";
    echo "<th>Currency</th>";
    echo "<th>Timezone</th>";
    echo "</tr>";

    foreach ($ips as $ip) {
        $location = get_geolocation($apiKey, $ip);
        $decodedLocation = json_decode($location, true);

        echo "<tr>";
        
        if ($decodedLocation['message'] != '') {
            echo "<td>".$ip."</td>";
            echo "<td>".$decodedLocation['message']."</td>";
        } else {
            echo "<td>".$decodedLocation['ip']."</td>";
            echo "<td>".$decodedLocation['continent_name']." (".$decodedLocation['continent_code'].")</td>";
            echo "<td>".$decodedLocation['country_name']." (".$decodedLocation['country_code2'].")</td>";
            echo "<td>".$decodedLocation['organization']."</td>";
            echo "<td>".$decodedLocation['isp']."</td>";
            echo "<td>".$decodedLocation['languages']."</td>";

            if ($decodedLocation['is_eu'] == true) {
                echo "<td>Yes</td>";
            } else {
                echo "<td>No</td>";
            }
            
            echo "<td>".$decodedLocation['currency']['name']."</td>";
            echo "<td>".$decodedLocation['time_zone']['name']."</td>";
        }

        echo "</tr>";
    }

    echo "</table>";

    function get_geolocation($apiKey, $ip) {
        $url = "http://api.ipstack.com/".$ip."?access_key=".$apiKey;
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($ch);
        curl_close($ch);
        return $output;
    }
?>