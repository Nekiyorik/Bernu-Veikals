$('document').ready(function(){
		var login;
		var password; var password2;
		var freeNick;
		$("#recipient-login").change(function(){
			login=$("#recipient-login").val();
            if (login.length<4) danger("Логин не может быть меньше 4 символов!", "loginLength");
            else if (login.length>16) danger("Логин не может быть больше 16 символов!", "loginLength");
            else dangerEnd("loginLength");
		})
		$("#recipient-login").on("input", function(){
			login=$("#recipient-login").val();
			this.value= login.replace(/[^A-Za-z0-9]/g, '');
		})
		$("#recipient-password").change(function(){
			password=$("#recipient-password").val();
            if (password.length<8) danger("Пароль не может быть меньше 8 символов!", "passwordLength");
            else dangerEnd("passwordLength");
		})
		$("#logBtn").click(function(){
			login=$("#recipient-login").val();
			password=$("#recipient-password").val();
			if(login.length<4 || login.length>16 || password.length<8){
				danger("Вы заполнили не все поля!", "polyaDont");
			}
			else{
				dangerEnd("polyaDont");
			$.ajax({
			type: "GET",
			url:"php/log.php",
			data: {login: login, password: password},
			success: function(data){
				var arr=JSON.parse(data);
				for(key in arr[0]){
					if(key=="error"){
						danger("Возникла ошибка при авторизации!"+arr[0].error,"dontFind");
						break;}
					else{
						$(".alertForm").after('<div class="alert alert-success" role="alert">Вы успешно авторизовались с никнеймом: '+arr[0].login_user+'</div>')
						break;}}}});}})

		$("#reg_recipient-login").change(function(){
			login=$("#reg_recipient-login").val();
            if (login.length<4) danger("Логин не может быть меньше 4 символов!", "loginLength");
            else if (login.length>16) danger("Логин не может быть больше 16 символов!", "loginLength");
            else{
            	dangerEnd("loginLength");
            	login=$("#reg_recipient-login").val();
            		$.ajax({
						type: "GET",
						url:"php/reg.php",
						data: {login: login, type: "testLogin"},
						success: function(data){
							console.log(data);
							var arr=JSON.parse(data);
							console.log(arr[0]);
								for(key in arr[0]){
									if(key=="error"){
										danger("Возникла ошибка при регистрации! "+arr[0].error,"dontFreeNick");
										break;}
									else{
										freeNick=true;
										dangerEnd("dontFreeNick");
							    		break;}}}})
            }
		})
		$("#reg_recipient-login").on("input", function(){
			login=$("#reg_recipient-login").val();
			this.value= login.replace(/[^A-Za-z0-9]/g, '');
		})

		$("#reg_recipient-password1").change(function(){
			password=$("#reg_recipient-password1").val();
            if (password.length<8) danger("Пароль не может быть меньше 8 символов!", "passwordLength");
            else dangerEnd("passwordLength");
        })
        $("#reg_recipient-password1").on("input", function(){
			password=$("#reg_recipient-password1").val();
            if(password!=password2){danger("Пароли не совпадают!", "passwordIdent")}
            else dangerEnd("passwordIdent");
        })
        $("#reg_recipient-password2").on("input", function(){
			password2=$("#reg_recipient-password2").val();
            if(password!=password2){danger("Пароли не совпадают!", "passwordIdent")}
            else dangerEnd("passwordIdent");
        })
        $("#regBtn").click(function(){
        	login=$("#reg_recipient-login").val();
        	password=$("#reg_recipient-password1").val();
        	password2=$("#reg_recipient-password2").val();
        	mail=$("#reg_recipient-mail").val();
        	if (login.length>=4 && login.length<=16) {
        		if (freeNick) {
        			if (password==password2) {
        				if(password.length>8){
        					$.ajax({
								type: "GET",
								url:"php/reg.php",
								data: {login: login, mail: mail, password: password},
								success: function(data){
         						 $(".alertForm").after('<div class="alert alert-success" role="alert">Вы успешно зарегестрировались!</div>')
													}});
        				}
        				else{danger("Пароль не может быть меньше 8 символов!", "passwordLength");}
        			}
        			else{danger("Пароли не совпадают!", "passwordIdent");}
        		}
        		else{danger("Данный никнейм уже занят", "dontFreeNick");}
        	}		
        	else{danger("Длина логина должна быть от 4 до 16 символов.", "loginLength");}
        })


	function danger(text, reason){
	dangerEnd(reason);
    $(".alertForm").after('<div class="alert alert-danger '+reason+'" role="alert">'+text+'</div>');
	}
	function dangerEnd(reason){
    $("."+reason).remove();
	}
})