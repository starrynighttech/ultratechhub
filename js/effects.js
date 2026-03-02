
const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",e=>{
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
});

const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

document.addEventListener("mousemove",e=>{
particles.push({x:e.clientX,y:e.clientY,size:Math.random()*4,alpha:1});
});

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach((p,i)=>{
p.alpha-=0.02;
p.size*=0.97;

if(p.alpha<=0)particles.splice(i,1);

ctx.fillStyle=`rgba(31,110,212,${p.alpha})`;
ctx.beginPath();
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
ctx.fill();
});

requestAnimationFrame(animate);
}

animate();
