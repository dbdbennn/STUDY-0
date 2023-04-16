let selectVisible = (id) => {  
    let selects = document.getElementsByClassName("select");
    let selected = document.getElementsByClassName(id)[0];
    let img = document.getElementById(id);
    let imgs = document.getElementsByTagName("img");
    for(let i = 0; i<4; i++) {
        selects[i].style.visibility = "hidden";
        imgs[i].style.backgroundColor = "transparent";
        imgs[i].style.boxShadow = "none";
    }

    img.style.backgroundColor = "#FDD0D0";
    img.style.boxShadow = "0 0 0 3px #FFA8A8 inset";
    selected.style.visibility = "visible";
}