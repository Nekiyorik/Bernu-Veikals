<?
include "connect.php";
$login=$_GET['login'];
$mail=$_GET['mail'];
$password=$_GET['password'];
$type=$_GET['type'];
 if ($type=="testLogin") {
    $zapros="SELECT * FROM `users` WHERE `login_user`='$login'";
 }
 else{
 	$zapros="INSERT INTO `users` (`login_user`, `mail_user`, `password_user`)  VALUES ('$login','$mail','$password')";
 }
$sql=$link->query($zapros);
    if ($zapros=="INSERT INTO `users` (`login_user`, `mail_user`, `password_user`)  VALUES ('$login','$mail','$password')") {
		if ($link->error!='') {
			$arr[]=['error'=>"Ошибка:".$link->error];
								}
		else{
				while($obj=$sql->fetch_object()){
					$arr[]=$obj;
			}
		}
		echo json_encode($arr,JSON_UNESCAPED_UNICODE);	
    }
    else{
    	if ($link->error!='') {
			$arr[]=['error'=>"Ошибка:".$link->error];
								}
		else{
			if ($sql->num_rows!="") {
				$arr[]=['error'=>"Такой никнейм уже зарегестрирован!"];
			}
			else{
				$arr[]=['success'=>"Никнейм не занят"];
			}
		}
		echo json_encode($arr,JSON_UNESCAPED_UNICODE);
    }
?>