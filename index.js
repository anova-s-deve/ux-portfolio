var el = document.getElementsByClassName("overlay-inner");
for (i in el){
    el[i].addEventListener("mouseover", function(){
        textVisible();
    });
}

function textVisible() {
    document.getElementsByClassName("top-left-1400").style.opacity = "1";
    document.getElementsByClassName("overlay-inner").style.backgroundColor = "black";
    document.getElementsByClassName("overlay-inner").style.opacity = "0.7";
}