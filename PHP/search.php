<?php
header('Access-Control-Allow-Origin: *');
include "./Domain/Entities/Search.php";
include "./Domain/Services/dbContext.php";

$name = htmlspecialchars($_POST["name"]);

$searchSQl = $db->prepare("SELECT * FROM people WHERE name LIKE ? ");
$searchSQl->execute(array("%".$name."%"));

while($p = $searchSQl->fetch()){
    $result = new Result($p["name"], $p["description"]);
    echo json_encode($result);
}

?>