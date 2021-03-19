function otp()
{
	var x=document.getElementById('OTP').value
	if(x=="")
	{
		alert("please enter OTP");
		return false;
	}
	if((x.length)<=6||(x.length)>=6)
	{
		alert("OTP only contains 6 digits of number")
		return false;
	}
	return true;
}