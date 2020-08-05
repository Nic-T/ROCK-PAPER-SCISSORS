let pScore=0;
let cScore=0;

let player = prompt("Choose ROCK ,PAPER ,or SCISSORS").toLowerCase;

function computerPlay(){


    let number = Math.floor(Math.random()*3)+1;
    let choice;
    switch(number){

        case 1:
             choice ="Rock";
             console.log(choice)
            break;

        case 2:
             choice ="Paper";
             console.log(choice)
            break;

        case 3:
             choice="Scissors";
             console.log(choice)
            break;

        default:
            console.log("Something went really wrong");
            return;
    }
    return choice;
}

let computer = computerPlay();
computer=computer.toLowerCase();

function playRound(computer,player){

    if(computer ==="rock" && player === "scissors" || computer ==="paper" && player=== "rock"|| computer==="scissors"&&player==="paper"){

        console.log(`Computer has won with ${computer}`);
        cScore= cScore+1;

    }

    else if(computer ==="rock" && player === "paper" || computer ==="paper" && player=== "scissors"|| computer==="scissors"&&player==="rock"){

        console.log(`Computer has lost with ${computer}`);
        pScore= pScore+1;

    }
    else{

        console.log("It is a tie");
    }


}

playRound(computer,player);