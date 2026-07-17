const stars = document.getElementById("stars");

for(let i=0;i<180;i++){

    const star=document.createElement("div");

    star.classList.add("star");

    const size=Math.random()*3+1;

    star.style.width=size+"px";
    star.style.height=size+"px";

    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";

    star.style.animationDuration=(Math.random()*4+2)+"s";

    stars.appendChild(star);

}

document.getElementById("enterButton").addEventListener("click",()=>{

    alert("Aquí aparecerá la siguiente parte de la historia ❤️");

});
