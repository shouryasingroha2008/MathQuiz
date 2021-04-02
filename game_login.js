function addUser(){
    player1_name= document.getElementById("player1name").value ;
    player2_name= document.getElementById("player2name").value ;  

    localStorage.setItem("Player 1", player1_name);
    localStorage.setItem("Player 2", player2_name);

    window.location="quiz_game_page.html";
}