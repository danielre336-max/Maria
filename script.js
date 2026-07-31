//============================
// BOTÓN ABRIR
//============================

const enter = document.getElementById("enter");

enter.onclick = () => {

document.querySelector(".letter").classList.remove("hidden");
document.querySelector(".gallery").classList.remove("hidden");
document.querySelector(".reasons").classList.remove("hidden");
document.querySelector(".final").classList.remove("hidden");

window.scrollTo({

top:window.innerHeight,

behavior:"smooth"

});

}


//============================
// CORAZONES FLOTANTES
//============================

const hearts = document.getElementById("hearts");

function createHeart(){

const heart = document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="absolute";

heart.style.left=Math.random()*100+"%";

heart.style.bottom="-40px";

heart.style.fontSize=(15+Math.random()*30)+"px";

heart.style.opacity=".8";

heart.style.animation=`heartUp ${6+Math.random()*5}s linear`;

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,400);


//============================
// ANIMACIÓN CSS
//============================

const style=document.createElement("style");

style.innerHTML=`

@keyframes heartUp{

0%{

transform:translateY(0) rotate(0deg);

opacity:0;

}

15%{

opacity:1;

}

100%{

transform:translateY(-120vh) rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);


//============================
// EFECTO CLICK
//============================

document.addEventListener("click",(e)=>{

const spark=document.createElement("div");

spark.innerHTML="💖";

spark.style.position="fixed";

spark.style.left=e.clientX+"px";

spark.style.top=e.clientY+"px";

spark.style.fontSize="22px";

spark.style.pointerEvents="none";

spark.style.animation="clickHeart .8s forwards";

document.body.appendChild(spark);

setTimeout(()=>{

spark.remove();

},800);

});


const style2=document.createElement("style");

style2.innerHTML=`

@keyframes clickHeart{

0%{

transform:scale(.2);

opacity:1;

}

100%{

transform:translateY(-80px) scale(2);

opacity:0;

}

}

`;

document.head.appendChild(style2);


//============================
// RAZONES
//============================

const reasons=[

"Porque tu sonrisa ilumina mi vida ❤️",

"Porque haces felices mis días.",

"Porque contigo todo es más bonito.",

"Porque eres mi lugar seguro.",

"Porque nunca dejaré de elegirte.",

"Porque cada mensaje tuyo alegra mi corazón.",

"Porque eres la niña más hermosa del mundo.",

"Porque eres mi persona favorita.",

"Porque amo todo de ti.",

"Porque simplemente eres María 🩶"

];

let i=0;

const reasonBox=document.getElementById("reasonBox");

document.getElementById("nextReason").onclick=()=>{

i++;

if(i>=reasons.length){

i=0;

}

reasonBox.innerHTML=reasons[i];

};


//============================
// VISOR DE FOTOS
//============================

const viewer=document.getElementById("viewer");

const viewerImg=document.getElementById("viewerImg");

document.querySelectorAll(".card img").forEach(img=>{

img.onclick=()=>{

viewer.style.display="flex";

viewerImg.src=img.src;

}

});

document.getElementById("close").onclick=()=>{

viewer.style.display="none";

}

viewer.onclick=(e)=>{

if(e.target==viewer){

viewer.style.display="none";

}

}


//============================
// ESTRELLAS FUGACES
//============================

function shootingStar(){

const star=document.createElement("div");

star.style.position="fixed";

star.style.left="-200px";

star.style.top=Math.random()*250+"px";

star.style.width="150px";

star.style.height="2px";

star.style.background="linear-gradient(90deg,#fff,transparent)";

star.style.transform="rotate(-20deg)";

star.style.opacity=".9";

star.style.pointerEvents="none";

document.body.appendChild(star);

let x=-200;

const move=setInterval(()=>{

x+=35;

star.style.left=x+"px";

if(x>window.innerWidth+200){

clearInterval(move);

star.remove();

}

},15);

}

setInterval(shootingStar,3500);


//============================
// MENSAJE FINAL
//============================

setTimeout(()=>{

alert(

"❤️\n\nMaría\n\nSi llegaste hasta aquí quiero que sepas que esta página fue hecha con mucho cariño solo para ti.\n\nGracias por existir.\n\nTe amo muchísimo. ❤️"

);

},18000);
//============================
// DATOS DE LAS FOTOS
//============================

const datos=[

{

titulo:"Mi niña hermosa ❤️",

texto:"Cada vez que veo esta foto recuerdo la primera vez que pensé que eras la niña más bonita del mundo."

},

{

titulo:"Tu sonrisa ✨",

texto:"No importa cómo haya sido mi día, una sonrisa tuya siempre consigue alegrarme."

},

{

titulo:"Mi felicidad 🌙",

texto:"Aunque estemos lejos, siempre te siento muy cerquita de mi corazón."

},

{

titulo:"Mi princesa 👑",

texto:"Eres una persona maravillosa y me haces sentir muy afortunado de tenerte en mi vida."

},

{

titulo:"Nosotros ❤️",

texto:"Mi lugar favorito no es un sitio, eres tú."

}

];

const imgs=document.querySelectorAll(".card img");

const title=document.getElementById("viewerTitle");

const text=document.getElementById("viewerText");

imgs.forEach((img,index)=>{

img.onclick=()=>{

viewer.style.display="flex";

viewerImg.src=img.src;

title.innerHTML=datos[index].titulo;

text.innerHTML=datos[index].texto;

}

});


//============================
// CONTADOR
//============================

const contador=document.createElement("div");

contador.className="counter";

contador.innerHTML="❤️ Siempre pienso en ti ❤️";

document.querySelector(".final").appendChild(contador);

let segundos=0;

setInterval(()=>{

segundos++;

contador.innerHTML=

"❤️ Han pasado "+segundos+

" segundos desde que abriste esta página y sigo pensando en ti ❤️";

},1000);


//============================
// NIEVE DE CORAZONES
//============================

function lluvia(){

const c=document.createElement("div");

c.innerHTML="🩶";

c.style.position="fixed";

c.style.top="-50px";

c.style.left=Math.random()*100+"%";

c.style.fontSize=(20+Math.random()*20)+"px";

c.style.opacity=".7";

c.style.pointerEvents="none";

document.body.appendChild(c);

let y=-50;

const mover=setInterval(()=>{

y+=2;

c.style.top=y+"px";

if(y>window.innerHeight+100){

clearInterval(mover);

c.remove();

}

},15);

}

setInterval(lluvia,800);