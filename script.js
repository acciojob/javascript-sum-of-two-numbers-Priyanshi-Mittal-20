let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");

// Write your code here and print the output using alert function
if(input1 === "" ||
    input2 === "" ||
    isNaN(input1) ||
    isNaN(input2))
{
	alert("Invalid input. Please enter a valid number.")
	
}
else
{
	let result=+input1 + +input2;
	alert(`The sum of ${input1} and ${input2} is ${result}.`);
}