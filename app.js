let boxes=document.querySelectorAll(".box");
let msg=document.querySelector("p");
let resetbutton=document.querySelector(".resetbtn");
let turnO=true;
let winningPattern=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];
boxes.forEach((box)=>{
     box.addEventListener("click",()=>{
        if(turnO){
            box.style.color="blue";
            box.innerText="O";
            turnO=false;
        }
        else{
            box.style.color="red";
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
     });
});
const checkwinner=()=>{
    let f=0;
        for(pattern of winningPattern){
            pattern1=boxes[pattern[0]].innerText;
            pattern2=boxes[pattern[1]].innerText;
            pattern3=boxes[pattern[2]].innerText;
           if(pattern1!="" && pattern2!=="" && pattern3!==""){
                f++;
                if(pattern1===pattern2 && pattern2 === pattern3){
                    msg.innerText=`Congratulations, Winner is ${pattern1}`;
                    disable();
                }
            }
        }
        if(f===8){
            msg.innerText='Draw!';
 
        }
};
const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
}
const resetbtn=()=>{
    for(box of boxes){
        enable();
        box.innerText="";
        msg.innerText="";
    }
}

resetbutton.addEventListener("click",resetbtn);
