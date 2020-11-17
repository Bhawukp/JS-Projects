function createheart(){
    const heart=document.createElement("div");
    heart.classList.add("heart");
    heart.style.left=Math.random()*100+"Vw";
    heart.innerText="💜";
    document.body.appendChild(heart);
    setTimeout(()=>{
        heart.remove();
    },5000);
}
setInterval(createheart,300);