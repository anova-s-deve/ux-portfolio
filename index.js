function textVisible() {   
    if( window.innerWidth < 1400 ) {
        this.querySelectorAll(".top-left-1400")[0].style.opacity="1";
    }
}

function textInvisible() {
    if( window.innerWidth < 1400 ) {
        this.querySelectorAll(".top-left-1400")[0].style.opacity="0";
    }
}

var el = document.getElementsByClassName("overlay-inner");
for (let i of el){
    i.addEventListener("mouseover", textVisible)
}

for (let i of el){
    i.addEventListener("mouseout", textInvisible)
}

