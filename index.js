console.log('Hellow Wurld?');

function table(a,b){

	let A = a;
	let B = b;
	let C = '';
	let D = ''

	if( A > B ){
		C = A - B + 5
		step9(C);
			//console.log(A, B, C);
	} else {
		A = B;
		C = A + B;
			//console.log(A, B, C);
			step9(C);
	};

	function step9(c){
		let C = c;
		//console.log(C);

		if(C === [ 10, 11, 12, 13 ]){
			console.log('StepTwo');
		} else if (C === [ 14, 15, 16, 17 ]){
			console.log('StepThree');
		} else if (C === [ 18, 19, 20, 21, 22 ]){
			console.log('StepFour');
		} else if (C === [ 23, 24, 25, 26 ]){
			console.log('StepSeven');
		} else if (C === [ 27, 28, 29, 30 ]){
			console.log('StepEight');
		} else {
			//console.log('StepOne');
			step1(A,B,C)
		}
	}

	function step1(a,b,c){
		//console.log(A, B, C);
		A = A + 1;
		C = A + B;

		if(C <= 30){
			step9(C);
		} else {
			D = C;
		}
	} 

	console.log('Final Output for C is: ' + D);
};

table(1,2);
table(5,9);

table(7,2);
table(9,1);

function questions(){

	let complete = [];
	let response = [];
	let countA = [];
	let countB = [];
	let countC = [];

	function question1(){
		let q = {
			"Question" : "You went to a party last night and when you arrived to school the next day, everybody is talking about something you didn't do. What will you do?",
			"a": "A. Avoid everything and go with your friends",	
			"b": "B. Go and talk with the person that started the rumors",	
			"c": "C. Go and talk with the teacher"
		};

		let answer = prompt(`${q.Question}\n\n${q.a}\n\n${q.b}\n\n${q.c}\n`);
			// console.log(answer);

		if( answer === 'a' || answer === 'b' || answer === 'c' || answer === 'C' || answer === 'B' || answer === 'A' ){
				alert("Thank you for answering!");
				if(complete.includes(1)){
					wheelOfQuestion()
				} else {
					complete.push(1);
					response.push({ "Question#": 1, "Answer": answer});
					if(answer.toLowerCase() === 'a'){
						countA.push(1);
					} else if(answer.toLowerCase() === 'b'){
						countB.push(1);
					} else {
						countC.push(1);
					}
				}
		} else {
			alert("Please select from 'A', 'B', 'C' only!");
			question1();
		}
	};

	function question2(){
		let q = {
			"Question" : "What quality do you excel the most?",
			"a": "A. Empathy",	
			"b": "B. Curiosity",	
			"c": "C. Perseverance"
		};

		let answer = prompt(`${q.Question}\n\n${q.a}\n\n${q.b}\n\n${q.c}\n`);
			// console.log(answer);

		if( answer === 'a' || answer === 'b' || answer === 'c' || answer === 'C' || answer === 'B' || answer === 'A' ){
				alert("Thank you for answering!");
				if(complete.includes(2)){
					wheelOfQuestion()
				} else {
					complete.push(2);
					response.push({ "Question#": 2, "Answer": answer});
					if(answer.toLowerCase() === 'a'){
						countA.push(2);
					} else if(answer.toLowerCase() === 'b'){
						countB.push(2);
					} else {
						countC.push(2);
					}
				}
		}  else {
			alert("Please select from 'A', 'B', 'C' only!");
			question2();
		}
	};

	function question3(){
		let q = {
			"Question" : "You are walking down the street when you see an old lady trying to cross, what will you do?",
			"a": "A. Go and help her",	
			"b": "B. Go for a policemen and ask him to help",	
			"c": "C. Keep walking ahead"
		};

		let answer = prompt(`${q.Question}\n\n${q.a}\n\n${q.b}\n\n${q.c}\n`);
			// console.log(answer);

		if( answer === 'a' || answer === 'b' || answer === 'c' || answer === 'C' || answer === 'B' || answer === 'A' ){
				alert("Thank you for answering!");
				if(complete.includes(3)){
					wheelOfQuestion()
				} else {
					complete.push(3);
					response.push({ "Question#": 3, "Answer": answer});
					if(answer.toLowerCase() === 'a'){
						countA.push(3);
					} else if(answer.toLowerCase() === 'b'){
						countB.push(3);
					} else {
						countC.push(3);
					}
				}
		} else {
			alert("Please select from 'A', 'B', 'C' only!");
			question3();
		}
	};

	function question4(){
		let q = {
			"Question" : "You had a very difficult day at school, you will maintain a ______ attitude?",
			"a": "A. Depends on the situation",	
			"b": "B. Positive",	
			"c": "C. Negative"
		};

		let answer = prompt(`${q.Question}\n\n${q.a}\n\n${q.b}\n\n${q.c}\n`);
			// console.log(answer);

		if( answer === 'a' || answer === 'b' || answer === 'c' || answer === 'C' || answer === 'B' || answer === 'A' ){
				alert("Thank you for answering!");
				if(complete.includes(4)){
					wheelOfQuestion()
				} else {
					complete.push(4);
					response.push({ "Question#": 4, "Answer": answer});
					if(answer.toLowerCase() === 'a'){
						countA.push(4);
					} else if(answer.toLowerCase() === 'b'){
						countB.push(4);
					} else {
						countC.push(4);
					}
				}
		} else {
			alert("Please select from 'A', 'B', 'C' only!");
			question4();
		}
	};

	function question5(){
		let q = {
			"Question" : "You are at a party and a friend of yours comes over and offers you a drink, what do you do?",
			"a": "A. Say no thanks",	
			"b": "B. Drink it until it is finished",	
			"c": "C. Ignore him and get angry at him"
		};

		let answer = prompt(`${q.Question}\n\n${q.a}\n\n${q.b}\n\n${q.c}\n`);
			// console.log(answer);

		if( answer === 'a' || answer === 'b' || answer === 'c' || answer === 'C' || answer === 'B' || answer === 'A' ){
				alert("Thank you for answering!");
				if(complete.includes(5)){
					wheelOfQuestion()
				} else {
					complete.push(5);
					response.push({ "Question#": 5, "Answer": answer});
					if(answer.toLowerCase() === 'a'){
						countA.push(5);
					} else if(answer.toLowerCase() === 'b'){
						countB.push(5);
					} else {
						countC.push(5);
					}
				}
		} else {
			alert("Please select from 'A', 'B', 'C' only!");
			question5();
		}
	};

	function question6(){
		let q = {
			"Question" : "You just started in a new school, you will...",
			"a": "A. Go and talk with the person next to you",	
			"b": "B. Wait until someone comes over you",	
			"c": "C. Not talk to anyone"
		};

		let answer = prompt(`${q.Question}\n\n${q.a}\n\n${q.b}\n\n${q.c}\n`);
			// console.log(answer);

		if( answer === 'a' || answer === 'b' || answer === 'c' || answer === 'C' || answer === 'B' || answer === 'A' ){
				alert("Thank you for answering!");
				if(complete.includes(6)){
					wheelOfQuestion()
				} else {
					complete.push(6);
					response.push({ "Question#": 6, "Answer": answer});
					if(answer.toLowerCase() === 'a'){
						countA.push(6);
					} else if(answer.toLowerCase() === 'b'){
						countB.push(6);
					} else {
						countC.push(6);
					}
				}
		} else {
			alert("Please select from 'A', 'B', 'C' only!");
			question6();
		}
	};

	function question7(){
		let q = {
			"Question" : "In a typical Friday, you would like to..",
			"a": "A. Go out with your close friends to eat",	
			"b": "B. Go to a social club and meet more people",	
			"c": "C. Invite one of your friends to your house"
		}

		let answer = prompt(`${q.Question}\n\n${q.a}\n\n${q.b}\n\n${q.c}\n`);
			// console.log(answer);

		if( answer === 'a' || answer === 'b' || answer === 'c' || answer === 'C' || answer === 'B' || answer === 'A' ){
				alert("Thank you for answering!");
				if(complete.includes(7)){
					wheelOfQuestion()
				} else {
					complete.push(7);
					response.push({ "Question#": 7, "Answer": answer});
					if(answer.toLowerCase() === 'a'){
						countA.push(7);
					} else if(answer.toLowerCase() === 'b'){
						countB.push(7);
					} else {
						countC.push(7);
					}
				}
		} else {
			alert("Please select from 'A', 'B', 'C' only!");
			question7();
		}
	};

	function question8(){
		let q = {
			"Question" : "Your relationship with your parents is..",
			"a": "A. I like both equally",	
			"b": "B. I like both equally",	
			"c": "C. I like my Mom the most"
		}

		let answer = prompt(`${q.Question}\n\n${q.a}\n\n${q.b}\n\n${q.c}\n`);
			// console.log(answer);

		if( answer.toLowerCase() === 'a' || answer === 'b' || answer === 'c' ){
				alert("Thank you for answering!");
				if(complete.includes(8)){
					wheelOfQuestion()
				} else {
					complete.push(8);
					response.push({ "Question#": 8, "Answer": answer});
					if(answer.toLowerCase() === 'a'){
						countA.push(8);
					} else if(answer.toLowerCase() === 'b'){
						countB.push(8);
					} else {
						countC.push(8);
					}
				}
		} else {
			alert("Please select from 'A', 'B', 'C' only!");
			question8();
		}
	};

	function wheelOfQuestion(){

		let bullet1 = [
		    question5,
		    question6,
		    question3,
		    question1,
		    question4,
		    question8,
		    question2,
		    question7,
		];

		// Fisher-Yates shuffle algorithm
		for (let i = bullet1.length - 1; i >= 0; i--) {
		    const j = Math.floor(Math.random() * (i + 1));
		    [bullet1[i], bullet1[j]] = [bullet1[j], bullet1[i]];
		    bullet1[i]();
		};

	};

	wheelOfQuestion();

		// console.log(complete);
		// console.log(complete.length);
	console.table(response);
		// console.log(response);
	console.log('count(a):' + countA.length);
	console.log('count(b):' + countB.length);
	console.log('count(c):' + countC.length);
	let total = countA.length + countB.length + countC.length
	console.log('Total Answers: ' + total);

	if (countA.length > countB.length && countA.length > countC.length) {
		console.log('Result 2');
		alert("Empathy You are emphatic. You see yourself in someone else’s situation before doing decisions. You tend to listen to other’s voices.");
	} else if (countB.length > countA.length && countB.length > countC.length) {
	    console.log('Result 3');
	    alert("Self-Awareness You are conscious of your own character, feelings, motives, and desires. The process can be painful but it leads to greater self-awareness.");
	} else if (countC.length > countA.length && countC.length > countB.length) {
	    console.log('Result 1');
	    alert("Self-Management You manage yourself well; You take responsibility for your own behavior and well-being.");
	} else if (countA.length === countB.length || countB.length === countC.length){
		console.log('Result 3');
		alert("Self-Awareness You are conscious of your own character, feelings, motives, and desires. The process can be painful but it leads to greater self-awareness.");
	} else if(countA.length === countC.length){
		console.log('Result 2');
		alert("Empathy You are emphatic. You see yourself in someone else’s situation before doing decisions. You tend to listen to other’s voices.");
	}

};

questions();