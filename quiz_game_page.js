player1_name= localStorage.getItem("Player 1").toUpperCase();
player2_name= localStorage.getItem("Player 2").toUpperCase();

player1_score= 0;
player2_score= 0;

document.getElementById("player1_name").innerHTML= player1_name + ": ";
document.getElementById("player2_name").innerHTML= player2_name+": ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_q").innerHTML="Question turn: "+player1_name;
document.getElementById("player_ans").innerHTML="Answer turn: "+player2_name;

remark="";

function send(){
    num1= document.getElementById("num1").value ;
    num2= document.getElementById("num2").value;

    actual_ans= parseInt(num1)* parseInt(num2);

    question= "<h4>"+num1+"X"+num2+"</h4>";
    input_box= "<br> Answer: <input id='ans' type='text' placeholder='type your answer here'>";
    check_button= "<br> <br> <button onclick='check()' class='btn btn-info'>Check</button>";
    row= question+ input_box+check_button;

    document.getElementById("output").innerHTML=row;
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
}

question_turn= "player1";
answer_turn="player2";

function check(){
    get_ans= document.getElementById("ans").value;

    if(get_ans == actual_ans){

        if(answer_turn == "player1"){
            player1_score +=1;
            document.getElementById("player1_score").innerHTML= player1_score;
        }else{
            player2_score +=1;
            document.getElementById("player2_score").innerHTML= player2_score;
        }
        remark="correct";
    }else{
        remark="wrong";
    }
    
    if(question_turn == "player1"){
        question_turn ="player2";
        answer_turn="player1";
        document.getElementById("player_q").innerHTML= "Question turn: "+player2_name;
        document.getElementById("player_ans").innerHTML="Answer turn: "+player1_name;
    }else{
        question_turn ="player1";
        answer_turn="player2";
        document.getElementById("player_q").innerHTML= "Question turn: "+player1_name;
        document.getElementById("player_ans").innerHTML="Answer turn: "+player2_name;
    }
    document.getElementById("output").innerHTML="";
   
    if(remark == "correct"){
        alert('Correct Answer...Well done!!  :)');
      } if(remark == "wrong"){
        alert('Wrong answer...Better luck next time  :(');
      }
}