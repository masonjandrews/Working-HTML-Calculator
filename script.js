let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector('.screen');

function buttonCLick(value){
	if(isNaN(value)){
		handleSymbol(value);
	}else{
		handleNumber(value);
	}
	screen.innerText = buffer;
}

function handleSymbol(symbol){
	
}