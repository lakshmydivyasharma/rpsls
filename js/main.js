document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("paper").onclick=playerThrowsPaper;
document.getElementById("scissors").onclick=playerThrowsScissors;
document.getElementById("lizard").onclick=playerThrowsLizard;
document.getElementById("spock").onclick=playerThrowsSpock;

function getRandomWeapon(){
	let randomNumber=Math.random();
	let botsWeapon="rock";

	if(randomNumber<.8){
		botsWeapon="paper";
	}
	else if(randomNumber<.6){
		botsWeapon="scissors";
	}
	else if(randomNumber<.4){
		botsWeapon="lizard";
	}
	else if(randomNumber<.2){
		botsWeapon="spock";
	}
}
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon===playersWeapon){
		displayCompleteMessage("There was a tie");
	}
	else if(
		(botsWeapon==="scissors" && playersWeapon==="paper") ||
		(botsWeapon==="paper" && playersWeapon==="rock") ||
		(botsWeapon==="rock" && playersWeapon==="lizard") ||
		(botsWeapon==="lizard" && playersWeapon==="spock") ||
		(botsWeapon==="spock" && playersWeapon==="scissors") ||
		(botsWeapon==="scissors" && playersWeapon==="lizard") ||
		(botsWeapon==="lizard" && playersWeapon==="paper") ||
		(botsWeapon==="paper" && playersWeapon==="spock") ||
		(botsWeapon==="spock" && playersWeapon==="rock") ||
		(botsWeapon==="rock" && playersWeapon==="scissors") ||
		){
		increaseBotScore();
	}
	else if{
		increasePlayerScore();
	}
