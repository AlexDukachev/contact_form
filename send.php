<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
 
require_once './PHPMailer/src/Exception.php';
require_once './PHPMailer/src/PHPMailer.php';
require_once './PHPMailer/src/SMTP.php';

$email = null;
$name = null;
$message = null;

if (isset($_POST['your-email'])) $email = $_POST['your-email'];
if (isset($_POST['your-name'])) $name = $_POST['your-name'];
if (isset($_POST['your-message'])) $message = $_POST['your-message'];

$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';
// Настройки SMTP
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 1;
 
$mail->Host = 'ssl://smtp.gmail.com';
$mail->Port = 465;
$mail->Username = 'alexvultr@gmail.com';
$mail->Password = '378Qw642@';

// От кого
$mail->setFrom('info@localhost', 'localhost');		
 
// Кому
$mail->addAddress('alex.dukachev@gmail.com', 'Иван Петров');
 
// Тема письма
$mail->Subject = 'Обратная связь с сайта';
 
// Тело письма
$mail->msgHTML($message);
 
$mail->send();