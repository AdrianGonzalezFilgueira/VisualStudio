function rps(player1,player2){

let resultado;
player1 = document.getElementById("player1");
player2 = document.getElementById("player2");
player1 = player1.value;
player2 = player2.value;

    if(player1 === "scissors" && player2 === "paper"){

        resultado = "Player 1 won!";

    }
    else if(player1 === "scissors" && player2 === "rock"){

        resultado = "Player 2 won!";

    }
    else if (player1 === player2){

        resultado = "Draw!";

    }

    alert(resultado);

    return resultado;

}
    
/*

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw 

*/
