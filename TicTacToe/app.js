let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContenner = document.querySelector(".msg-contenner");
let msg = document.querySelector("#msg");       

let playerO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame=()=> {
    playerO = true;
    enableBoxes();
    msgContenner.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
       
        if (playerO) {
            box.innerText = "O";
            playerO = false;
        } else {
            box.innerText = "X";
            playerO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disabledBox=()=>{
    for(let box of boxes){
        box.disabled= true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText ="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulation,Winner is ${winner}`;
    disabledBox();
    msgContenner.classList.remove("hide");
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1val);
            }
        }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
