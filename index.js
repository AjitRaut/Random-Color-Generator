let start=document.querySelector(".start");
let Stop=document.querySelector(".stop");
let colorcode=document.querySelector('.colorecode')

const randomcolor=()=>{
    let hexacode="1234567890ABCDEF";
    let color="#"
    for(let i=0;i<6;i++){
        color+=hexacode[Math.floor(+Math.random()*16)]
        colorcode.innerHTML=color
    }
    return color;
}

let stopinterval;
const StartCahngeCOlor=()=>{
    const changebgcolor=()=>{
    document.body.style.backgroundColor=randomcolor();
    }
    stopinterval= setInterval(changebgcolor,1000)

}
const stopCahngeCOlor=()=>{
    clearInterval(stopinterval);
    
}

start.addEventListener('click',StartCahngeCOlor);

Stop.addEventListener('click',stopCahngeCOlor);

