<?php
$errors = '';
$myemail = 'd.r.carvalho89@gmail.pt';//<-----Put Your email address here.
if(empty($_POST['name'])  ||
   empty($_POST['email']) ||
   empty($_POST['phone']) ||
   empty($_POST['message']))
{
    $errors .= "\n Error: all fields are required";
}
$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
$email_address))
{
    $errors .= "\n Error: Email inválido";
}

if( empty($errors))
{
	$to = $myemail;
	$email_subject = "Formulario de contacto ergoproject";
	$email_body = "Recebeu uma nova mensagem a partir do site NorteProject. ".
	" Aqui estão os detalhes:\n Name: $name \n ".
	"Email: $email_address\n".
	"Telefone: $phone\n" . "Message \n $message";
	$headers = "De: $myemail\n";
	$headers .= "Reply-To: $email_address";
	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	header('Location: success-form.html');
}
?>