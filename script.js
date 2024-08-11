let bool=true;
let x=document.getElementById("elemento");

let y=document.getElementById("sfondo");
let z=document.getElementById("sco");

x.addEventListener("click",function() {
    if(bool==true) {
    x.style.backgroundImage="url(img/bi.png)";
    x.style.border='0px solid transparent';
    x.style.left='70px';
    y.style.backgroundImage='url(img/notte1.jpg)';
    document.body.style.backgroundImage='url(img/mare.jpg)';
    bool=false;
    }
    else {
    x.style.backgroundImage="url(img/sole.jpg)";
    x.style.border='1px solid white';
    x.style.left='0px';
    y.style.backgroundImage='url(img/cielo.jpg)';
    document.body.style.backgroundImage='url(img/palme.jpg)';
    bool=true;
    }
})