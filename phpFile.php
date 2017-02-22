<?php
$first_last_name = $_POST['$first_last_name'];
$email = $_POST['$email'];
$msg = $_POST['$message'];
$to = "drajmane@gmail.com";
$subject = "Message from QuadCore";
$message = $msg;
$headers = "From: ".$first_last_name;

mail($to, $subject, $message, $headers);
echo "Your message has been sent!";
?>
