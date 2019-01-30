<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From Name: $name \n Message: $message";
$recipient = "vtakaraa@gmail.com";
$subject = "Contact Form";
$mailheader = "From Email: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>