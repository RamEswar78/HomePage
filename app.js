close=document.querySelector("#close");
details=document.querySelector(".container")
profile=document.querySelector(".Profile")
let hours=document.querySelector(".hours");
let min=document.querySelector(".min");
let secs=document.querySelector(".secs");
let fullDate=document.querySelector(".date");


profile.addEventListener("click",()=>{
    details.style.animation="slideIn 1s ease-in-out both"
})
details.addEventListener("mouseover",()=>{
    details.style.animation="slideIn 1s ease-in-out both"
})
details.addEventListener("mouseout",()=>{
    details.style.animation="slideOut 1s ease-in-out both"
})
myinter=setInterval(()=>{
    let date=new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const fullDateTime = new Intl.DateTimeFormat('en-US', options).format(date);
    hours.innerText=String(date.getHours()>12?date.getHours()-12:date.getHours()).padStart(2,'0');
    min.innerText=String(date.getMinutes()).padStart(2, '0');
    secs.innerText = String(date.getSeconds()).padStart(2, '0');
    fullDate.innerText=fullDateTime
},1000);