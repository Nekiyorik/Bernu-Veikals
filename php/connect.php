<? 
$link=new mysqli("localhost","mysql","mysql","BernuVeikals");
if($link->connect_error){
		echo "Соединение не удалось: %s\n".$link->connect_error;
	}
?>