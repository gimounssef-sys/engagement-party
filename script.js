/* ======================================================
   G&A ENGAGEMENT
   script.js
====================================================== */

const loader = document.getElementById("loader");
const opening = document.getElementById("opening");
const enterButton = document.getElementById("enterButton");

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

const backToTop = document.getElementById("backToTop");

/* ==========================================
LOADER
========================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.remove();

        }, 800);

    }, 1200);

});

/* ==========================================
OPEN INVITATION
========================================== */

enterButton.addEventListener("click", () => {

    opening.style.transition = "1s";

    opening.style.opacity = "0";

    opening.style.pointerEvents = "none";

    setTimeout(() => {

        opening.style.display = "none";

    }, 1000);

    music.play().catch(() => {});

});

/* ==========================================
MUSIC
========================================== */

let playing = false;

music.volume = 0.35;

musicButton.addEventListener("click", () => {

    if (playing) {

        music.pause();

        musicButton.innerHTML = "♪ Play Music";

    } else {

        music.play();

        musicButton.innerHTML = "❚❚ Pause";

    }

    playing = !playing;

});

/* ==========================================
COUNTDOWN
========================================== */

const targetDate = new Date(

    "September 12, 2026 19:00:00"

).getTime();

const days = document.getElementById("days");

const hours = document.getElementById("hours");

const minutes = document.getElementById("minutes");

const seconds = document.getElementById("seconds");

function updateCountdown(){

    const now = new Date().getTime();

    const distance = targetDate - now;

    if(distance <= 0){

        days.innerHTML = "00";
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";

        return;

    }

    const d = Math.floor(

        distance /

        (1000*60*60*24)

    );

    const h = Math.floor(

        (distance %

        (1000*60*60*24))

        /(1000*60*60)

    );

    const m = Math.floor(

        (distance %

        (1000*60*60))

        /(1000*60)

    );

    const s = Math.floor(

        (distance %

        (1000*60))

        /1000

    );

    days.innerHTML = String(d).padStart(2,"0");

    hours.innerHTML = String(h).padStart(2,"0");

    minutes.innerHTML = String(m).padStart(2,"0");

    seconds.innerHTML = String(s).padStart(2,"0");

}

updateCountdown();

setInterval(updateCountdown,1000);

/* ==========================================
BACK TO TOP
========================================== */

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ==========================================
FADE IN
========================================== */

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

}

});

},

{

threshold:.15

}

);

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});
/* ======================================================
   PARALLAX
====================================================== */

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("scroll", () => {

    const y = window.scrollY;

    if(heroImage){

        heroImage.style.transform =
            `translateY(${y * 0.08}px)`;

    }

});

/* ======================================================
   GALLERY HOVER
====================================================== */

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(image=>{

    image.addEventListener("mousemove",(e)=>{

        const rect = image.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        image.style.transformOrigin =
            `${x}px ${y}px`;

    });

});

/* ======================================================
   FLOATING PARTICLES
====================================================== */

const particles = document.querySelectorAll("#particles span");

particles.forEach((particle)=>{

    particle.style.top =
        Math.random()*100 + "%";

    particle.style.left =
        Math.random()*100 + "%";

    particle.style.animationDelay =
        Math.random()*20 + "s";

});

/* ======================================================
   MUSIC MEMORY
====================================================== */

const savedMusicState =
    localStorage.getItem("music");

if(savedMusicState==="playing"){

    music.play().catch(()=>{});

    playing=true;

    musicButton.innerHTML="❚❚ Pause";

}

musicButton.addEventListener("click",()=>{

    localStorage.setItem(

        "music",

        playing ? "playing" : "paused"

    );

});

/* ======================================================
   SMOOTH LINKS
====================================================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(

this.getAttribute("href")

);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* ======================================================
   BUTTON RIPPLE
====================================================== */

document.querySelectorAll("button,.button").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(

this.clientWidth,

this.clientHeight

);

circle.style.width=diameter+"px";
circle.style.height=diameter+"px";

circle.style.left=
e.offsetX-diameter/2+"px";

circle.style.top=
e.offsetY-diameter/2+"px";

circle.className="ripple";

const ripple=this.querySelector(".ripple");

if(ripple){

ripple.remove();

}

this.appendChild(circle);

});

});

/* ======================================================
   HEADER REVEAL
====================================================== */

const revealElements=document.querySelectorAll(

".event-card,.timeline-item,.final-card,.gallery-grid img"

);

const revealObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0)";

}

});

},

{

threshold:.12

}

);

revealElements.forEach(el=>{

el.style.opacity=0;

el.style.transform="translateY(40px)";

el.style.transition=".8s ease";

revealObserver.observe(el);

});

/* ======================================================
   RANDOM GOLD GLOW
====================================================== */

setInterval(()=>{

document.body.style.setProperty(

"--goldGlow",

`${Math.random()*0.18+0.08}`

);

},2500);

/* ======================================================
   CURSOR LIGHT
====================================================== */

document.addEventListener("mousemove",(e)=>{

document.body.style.setProperty(

"--mouseX",

e.clientX+"px"

);

document.body.style.setProperty(

"--mouseY",

e.clientY+"px"

);

});

/* ======================================================
   END
====================================================== */

console.log(

"%cGiovanna & Augusto",

"font-size:28px;color:#d8b56c;font-family:serif"

);

console.log(

"%cEngagement Website v3 Premium",

"font-size:14px;color:white"

);
