<?php

if (isset($_POST["name"]) && isset($_POST["color"]) && isset($_POST["howold"]) && isset($_POST["daytime"]) ) 

{ 

  // Формируем массив для JSON ответа
    $result = array(
      'name' => $_POST["name"],
      'color' => $_POST["color"],
      'howold' => $_POST["howold"],
      'daytime' => $_POST["daytime"]
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 
}

?>

