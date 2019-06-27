<?php
// Check for empty fields
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message']) || !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)){
	echo json_encode(array('error'=>'true'));
	return false;
}

$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];

$lastname = $_POST['lastname'];
$phone = $_POST['phone'];
$subject = ($_POST['subject'] ? $_POST['subject'] : "Website Contact Form:  $name");



// Create the email and send the message
$to = 'kabtechno@mail.ru'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = $subject;
$email_body = "Письмо получено по обратной связи с pskov-tara.ru.\n\n"."Детали письма:\n\nИмя: $name\n\nФамилия: $lastname\n\nЭлектронная почта @: $email_address\n\nНомер телефона: $phone\n\nСообщение:\n$message";
$headers = "From: noreply@pskov-tara.ru\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
echo json_encode(array('success'=>'true'));
return true;			
?>