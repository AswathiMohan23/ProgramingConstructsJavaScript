let number1 = 1221
let number2 = 3456
Palindrome(number1)
Palindrome(number2)


function Palindrome(number)
	{
		let rem, temp, output = 0;

		temp = number;
		while(number>0)
		{
			rem = number%10;
			number = parseInt(number/10);
			output = output*10+rem;
		}
		if(output==temp)
		{
			console.log("The number "+output+" is Palindrome");
		}
		else
		{
			console.log("The number "+output+" is not palindrome");
		}
    }