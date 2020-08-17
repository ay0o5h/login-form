let name_email=document.querySelector('#inputEmail3'),
    pass=document.querySelector('#inputPassword3');
	name_email.onfocus=function(){
		name_email.placeholder='';
	}
	name_email.onblur=function(){
		name_email.placeholder='Username or E-mail';
	}
	pass.onfocus=function(){
		pass.placeholder='';
	}
	pass.onblur=function(){
		pass.placeholder='password';
	}