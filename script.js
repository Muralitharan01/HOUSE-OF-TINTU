// Hide Loader
window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

    loader.style.transition = "0.8s";

});

// Fade Elements

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".glass-card,.content,.image-box").forEach((el)=>{

    observer.observe(el);

});

// Mouse Parallax

document.addEventListener("mousemove",(e)=>{

    const x = (window.innerWidth / 2 - e.pageX) / 40;

    const y = (window.innerHeight / 2 - e.pageY) / 40;

    const img = document.querySelector(".image-box img");

    if(img){

        img.style.transform = `translate(${x}px,${y}px)`;

    }

});

// Floating Background

document.querySelectorAll(".bg-shape").forEach((shape,index)=>{

    setInterval(()=>{

        const randomX = Math.random()*20-10;

        const randomY = Math.random()*20-10;

        shape.style.transform = `translate(${randomX}px,${randomY}px)`;

    },4000+(index*1000));

});

// Button Ripple Effect

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

const radius=diameter/2;

circle.style.width=circle.style.height=`${diameter}px`;

circle.style.left=`${e.clientX-this.getBoundingClientRect().left-radius}px`;

circle.style.top=`${e.clientY-this.getBoundingClientRect().top-radius}px`;

circle.classList.add("ripple");

const ripple=this.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

this.appendChild(circle);

});

});

// Smooth Image Glow

const image=document.querySelector(".image-box img");

let glow=0;

setInterval(()=>{

glow++;

image.style.boxShadow=`0 20px 60px rgba(176,141,87,${0.15+Math.sin(glow/15)*0.15})`;

},60);

// Auto Year

const footer=document.querySelector("footer");

footer.innerHTML=`© ${new Date().getFullYear()} House of Tintu. All Rights Reserved.`;

// Disable Right Click (Optional)

document.addEventListener("contextmenu",(e)=>{

e.preventDefault();

});

// Keyboard Shortcut Animation

document.addEventListener("keydown",(e)=>{

if(e.key==="ArrowDown"){

window.scrollTo({

top:document.body.scrollHeight,

behavior:"smooth"

});

}

});
