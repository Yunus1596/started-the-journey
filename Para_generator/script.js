const input=document.getElementById("numOfWords");
const container = document.querySelector(".container");
let numOfWords;
function generateWords(n){
    let words="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let text="";
    for(let i=0;i<n;i++){
        text+=words[(Math.random()*25).toFixed(0)];
        text+="";
    }
    return text;
}
function generateParas(){
    numOfWords=Number(input.value);
    const para=document.createElement("p");
    let data="";
    for(let i=0;i<numOfWords;i++){
        const randomNumber=(Math.random()*15).toFixed(0);
        data+= generateWords(randomNumber);
        data+=" ";
    }
    para.innerText=data;
    para.setAttribute("class","Paras");
    container.append(para);
 }


