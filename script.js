let main;

function init(){
    main = document.getElementsByTagName("main")[0];
    createImages();
    
}

window.onload = init();

function createImages(){
    img1 = document.createElement("img");
    img1.src = "breg.png";
    main.appendChild(img1);

    img2 = document.createElement("img");
    img2.src = "teknikum.png";
    main.appendChild(img2);
}