let boxes = document.querySelectorAll(".box0");
let reset = document.querySelector("#reset");
let gamebtn = document.querySelector("#newbtn");
let msg1 = document.querySelector("#msg1");
let msg = document.querySelector(".msg");



let turn0 =true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = ()=>{
    turn0 = true;
    enableBox();
    msg.classList.add("hide");
};

boxes.forEach((box0)=>{
    box0.addEventListener("click",()=>{
        console.log("box clicked");
        if(turn0 === true){
            box0.innerText = "O";
            turn0 = false;
        } else{
           box0.innerText = "X";
            turn0 = true;
         }
        box0.disabled = true;

       checkWinner();
    });
});

const disableBox=()=>{
    for (let box0 of boxes ){
        box0.disabled = true;
    }
}

const enableBox=()=>{
    for (let box0 of boxes ){
        box0.disabled = false;
        box0.innerText = "";
    }
}
const showWinner= (winner) => {
    msg1.innerText = 'WINNER WINNER CHICKEN DINNER';
    msg.classList.remove("hide");
    disableBox();
};


const checkWinner = () =>{
    for (let pattern of winPattern){
      

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val!= "" && pos2Val != "" && pos3Val != "" ){
            if(pos1Val=== pos2Val && pos2Val === pos3Val){
                console.log("winner", pos1Val);
                
                showWinner(pos1Val);
            }
        }

    }

};

gamebtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);