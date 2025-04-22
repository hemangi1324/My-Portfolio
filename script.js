let home = document.querySelector(".home");
let about = document.querySelector(".bio");
let contsection = document.querySelector(".contactme");
let sklsection = document.querySelector(".skills");
let abtbtn = document.querySelector("#click");
let sklbtn = document.querySelector("#skls");
let cntbtn = document.querySelector("#cnt");
let rtn = document.querySelectorAll(".rtn");

alert("Thank you!! for visiting my page");

const homesection = ()=>{
    console.log("at home");
    home.style.display = "block";
    about.style.display = "none";
    contsection.style.display = "none";
    sklsection.style.display = "none";
};

const aboutsection=()=>{
    home.style.display = "none";
    about.style.display = "block";
    contsection.style.display = "none";
    sklsection.style.display = "none";
};

const contactsection=()=>{
    home.style.display = "none";
    about.style.display = "none";
    contsection.style.display = "block";
    sklsection.style.display = "none";
};

const skillsection=()=>{
    home.style.display = "none";
    about.style.display = "none";
    contsection.style.display = "none";
    sklsection.style.display = "block";
};

abtbtn.addEventListener("click",aboutsection);
cntbtn.addEventListener("click",contactsection);
sklbtn.addEventListener("click",skillsection);

rtn.forEach((button)=>{
    button.addEventListener("click",homesection);
});
