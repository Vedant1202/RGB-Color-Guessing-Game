//Javascript for Color Guess Game (Udemy Course Practice Project)

var color = [];
//set random colors
for (var i = 0; i < 6; i++) {
	color[i] = colorRGB();
}

var square = document.querySelectorAll(".square");
var randomSelect = getRandomInt(0, 5); 
var selectedColor = color[randomSelect];
var colorDisplay = document.getElementById("colorDisp");
var resultDisp = document.getElementById('result');
var consequence = document.querySelector(".jumbotron");
var playAgain = document.getElementById("playAgain");
var randomSelect = getRandomInt(0, 5); 

colorDisplay.textContent = selectedColor;

for (var i = 0; i < square.length; i++) {
	//set background color
	square[i].style.backgroundColor = color[i];
	//set event listener and check clicked color
	square[i].addEventListener("click", checkColor);
}

function checkColor(){
	//function to check clicked color
	var clickedColor = this.style.backgroundColor;
	if (clickedColor == selectedColor) {
		// alert("Correct!");
		resultDisp.textContent = "Correct!";
		resultDisp.style.color = "#4cad0c";
		playAgain.textContent = "Play Again";
		// change the jumbotron and all squares color to the correct color
		for (var i = 0; i < 6; i++) {
			square[i].style.backgroundColor = selectedColor;
		}
		consequence.style.backgroundColor = selectedColor;

	}
	else {
		this.style.backgroundColor = "#474747";
		// alert("Wrong!! Try again");
		resultDisp.textContent = "Try Again!";
		resultDisp.style.color = "rgb(255, 0, 0)";
		playAgain.textContent = "New Colors";
	}
}
//restart event
playAgain.addEventListener("click", restart);

function restart(){
	// function to restart the game
	// set new colors 
	color = [];
	resultDisp.textContent = "";
	playAgain.textContent = "New Colors";
	for (var i = 0; i < 6; i++) {
		color[i] = colorRGB();
	}
	// fill new colors in the square
	for (var i = 0; i < square.length; i++) {
	square[i].style.backgroundColor = color[i]; 
	}
	randomSelect = getRandomInt(0, 5);
	selectedColor = color[randomSelect];
	colorDisplay.textContent = selectedColor;
	consequence.style.backgroundColor = "#F27A3A";
	checkColor();
	alert(randomSelect);
}

//function to get a random integer between a certain interval
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (var j = 0; j < 10; j++) {
	var randomInt = getRandomInt(0, 255);
	console.log(randomInt);
}

//function to get a random rgb color
function colorRGB(){
	var a = getRandomInt(0, 255);
	var b = getRandomInt(0, 255);
	var c = getRandomInt(0, 255);
	return "rgb(" + a + ", " + b + ", " + c + ")" ;
}

