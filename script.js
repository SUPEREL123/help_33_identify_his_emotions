
	let emotions = ["HAPPY","SAD","BORING","ANGRY","ANNOYED","SCARED"];
	let answer = "";
	let guessed = [];
	let word_progress = null;

	// answer=HAPPY
	// _ A _ _ _

	function random_answer() {
		answer = emotions[Math.floor(Math.random()*emotions.length)];
		console.log(answer);

	}

	function reset() {
		guessed = [];
		random_answer();
		check_win();
		keyboard();
		document.getElementById("correct_word").innerHTML = "";
	}

	function end() {
		if (word_progress == answer) {
			document.getElementById("correct_word").innerHTML = "ти Победи, 33 finally identify his emotions, thanks to u";
		}
			console.log(word_progress); 
	}
	

	//	try arguments in function
	// console.log(login("11", "1234567890", "idk@gmail.com"));
	// function login(username,password) {
	// 	return arguments[0] + arguments[1] + arguments[2];
	// }

	function keyboard() {
		let buttonsHTML = "QWERTYUIOPASDFGHJKLZXCVBNM".split("").map(letter => 
    	`<button class="btn btn-lg btn-info m-2" id='btn_` + letter + `' onClick="user_input('` + letter + `')">` + letter + `</button>`).join("");
		// let buttonsHTML = "qwertyuiopasdfghjklzxcvbnm".split("").map(letter => `<button id="btn_` + letter +`" class="btn btn-lg btn-info m-2" onclick="user_input(`+ letter +`)">` + letter + `</button>`).join("");
		document.getElementById("keyboard").innerHTML = buttonsHTML;
	}



	function user_input(letter_chose) {
		// console.log(`btn_${letter_chose}`);
		guessed.indexOf(letter_chose) === -1? guessed.push(letter_chose):null;
		document.getElementById(`btn_${letter_chose}`).disabled = true;
		if (answer.indexOf(letter_chose) >=0) {
			check_win();
			end();
		}
		
	}
	

	

	function check_win () {
		word_progress = answer.split("").map(eng => 
		guessed.indexOf(eng) === -1? "_ ":eng).join("");
		document.getElementById("progress").innerHTML = word_progress;
		console.log(word_progress); 
	} 

// guessed[A,B,C]

// 	-,A,-,-,-

// 	A,-


// 	"QWER"
// 	.split()-> ["Q","W","E","R"]
// 	.map-> <button class="btn btn-lg btn-info m-2" id='btn_` + letter + `' onClick="user_input('` + letter + `')">` + letter + `</button>`

// 	1:->["<button class="btn btn-lg btn-info m-2" id='btn_Q' onClick="user_input('Q')">Q</button>","W","E","R"]
// 	2:->["<button class="btn btn-lg btn-info m-2" id='btn_Q' onClick="user_input('Q')">Q</button>","<button class="btn btn-lg btn-info m-2" id='btn_W' onClick="user_input('W')">W</button>","E","R"]
// 	3:
// 	4:
// 	.join()->
//  	<button class="btn btn-lg btn-info m-2" id='btn_Q' onClick="user_input('Q')">Q</button>
// 	<button class="btn btn-lg btn-info m-2" id='btn_W' onClick="user_input('W')">W</button>
// 	<button class="btn btn-lg btn-info m-2" id='btn_E' onClick="user_input('E')">E</button>
// 	<button class="btn btn-lg btn-info m-2" id='btn_R' onClick="user_input('R')">R</button>



// names:
// 1. btn:
// =boon taw ming(opacity) 
// =unable to click
// =when click the button correctly call answer box

// 2. trys agaain
// =restart everything(baw cwuk: btn, answer box, random the emotion) lo

// 3. random answer
// =random quetion 
// =show

// 4. correct_word
// =win(show all correct word/no more underline) ge si how show congrat

	


reset();