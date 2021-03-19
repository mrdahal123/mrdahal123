function saurav()
{	var un="mrdahal";
	var pass="saurav123";
	var a=document.getElementById('user').value;
	var b=document.getElementById('pass').value;
	if(a=="")
	{
		alert("please provide a user name:");
		return false;
	}
	if((a.length)<=5||(a.length)>=10)
	{
		alert("user name must be in between 5 to 10");
		return false;
	}
	
	if(b=="")
	{
		alert("please provide your password");
		return false;
	}
 	else if(un!=a)
 		{
 			alert("incorrect user name");
 			return false;
 		}
 		else if(pass!=b)
	{
		alert("incorrect password");
		return false;
	}
	
	return true;
 	
}
