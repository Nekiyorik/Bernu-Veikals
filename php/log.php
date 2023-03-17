<?
include "connect.php";
$login=$_GET['login'];
$password=$_GET['password'];
$zapros="SELECT * FROM `users` WHERE `login_user`='$login' AND `password_user`='$password'";
$sql=$link->query($zapros);
if ($link->error!='') {
		$arr[]=['error'=>"Ошибка:".$link->error];
		}
		else{
			if ($sql->num_rows=="") {
				$arr[]=['error'=>"Такого пользователя не было найдено!"];
			}
			else{
				while($obj=$sql->fetch_object()){
					$arr[]=$obj;
				}
			}
		}
		echo json_encode($arr,JSON_UNESCAPED_UNICODE);
?>