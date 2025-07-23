document.getElementsByTagName("h1")[0].style.fontSize = "6vw";let boxes=document.querySelectorAll(".box")
let reset=document.querySelector("#reset-btn")
let mess=document.querySelector("#message")
let turn=true // player x,player o
const winPattern = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[3,4,5],
[6,7,8],
];
const newgame = () => {
  turn = true;
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
  mess.classList.add("hide");
  mess.innerText="welcome to the game hehehehheheheheheheh"
};



boxes.forEach((box)=> {
  box.addEventListener("click",()=>
  {
    console.log("hehe");
      if(turn){
        box.innerText="X";
        turn=false;
      }
      else
      {
        box.innerText="O";
        turn=true;
      }
      box.disabled=true;
      checkwinner()
  })
});
const message = (pos1Val) => {
  mess.innerText = `🎉 Congratulations! Winner is ${pos1Val}`;
  mess.classList.remove("hide");
  boxes.forEach((box) => box.disabled = true); 
};

const checkwinner=()=>
{
for(let pattern of winPattern)
{
let pos1Val = boxes [pattern[0]].innerText;
let pos2Val = boxes [pattern[1]].innerText;
let pos3Val = boxes [pattern [2]].innerText;
if (pos1Val != "" && pos2Val != "" && pos3Val != "") 
    {
    if (pos1Val === pos2Val&& pos2Val === pos3Val) {
    console.log("winner is",pos1Val);
  
    message(pos1Val)
    }
    }
  }
}

reset.addEventListener("click",newgame);