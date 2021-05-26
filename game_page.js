score1 = 0;
score2 = 0;

player1 = localStorage.getItem("Nick-name1");
player2 = localStorage.getItem("Nick-name2");

document.getElementById("Nick-name1").innerHTML = player1 + ":";
document.getElementById("Nick-name2").innerHTML = player2 + ":";


document.getElementById("score_board1").innerHTML = score1;
document.getElementById("score_board2").innerHTML = score2; 

document.getElementById("question").innerHTML = "Question Turn-" + player1;
document.getElementById("answer").innerHTML = "Answer Turn-" + player2 ;

function send()
 {
 number_1=document.getElementById("number_1").value;
 number_2=document.getElementById("number_1").value;
 actual_answer=parseInt(number_1) * parseInt(number_2);

question_number="<h4>" + number_1 +"X"+number_2+"</h4>";
input_box="<br>Answer : <input type='number' id='input_check_box'>";
button = "<br><br><button onclick='check()' class='btn btn-info'>Check</button>";

row = question_number+input_box+ button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";

document.getElementById("number_1").value ="";
document.getElementById("number_2").value ="";

 }
