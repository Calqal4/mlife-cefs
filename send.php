<?php
use PHPMailer\PHPMailer\PHPmailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if(isset($_POST["send"])){
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'projectmlifecontact@gmail.com';
    $mail->Password = 'vluejwuogwtaingh';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail->setFrom('projectmlifecontact@gmail.com');
    
    $mail->addAddress($_POST["email"]);

    $mail->isHTML(true);

    $mail->Subject = $_POST["subject"];
    $mail->Body = $_POST["message"];

    $mail->send();

    echo
    "

    <script>
    alert('შეტყობინება გაიგზავნა გთხოვთ დაელოდოთ პასუხს თქვენს მიერ მითითებულ მეილზე!');
        document.location.href = 'cefebi.html';
    </script>
    ";
}
?>