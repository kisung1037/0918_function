<?php

$name = "";



if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = test_input($_POST["username"]);

}



function test_input($data) {

  $data = trim($data);

  $data = stripslashes($data);

  $data = htmlspecialchars($data);

  return $data;

}

?>

<?php

echo $name;
?>