const menustylee=["accessories","backgrounds","ears","eyes","hair","leg","mouth","neck"];
const accessoriesstylee=["earings","flower","headphone","glasses"];
const backgroundsstylee=["blue50","blue60","blue70","darkblue30","darkblue50","darkblue70","grey40","grey70","grey80","green50","green60","green70","red50","red60","red70","yellow50","yellow60","yellow70"];
const earsstylee=["default","tilt-forward","tilt-backward"];
const eyesstylee=["default","angry","naughty","panda","smart","star"];
const hairstylee=["bang","curls","default","elegant","fancy","quiff","short"];
const legstylee=["bubble-tea","cookie","default","game-console","tilt-backward","tilt-forward"];
const mouthstylee=["astonished","default","eating","laugh","tongue"];
const neckstylee=["bend-backward","bend-forward","default","thick"];

// To Select all menu ELEMENTS
var menus=document.querySelectorAll(".menu");
var menuslen=menus.length;
var currentmenu=document.querySelector(".active");

//Setting up Default menu (for Hair)

var styleH3=currentmenu.textContent+" Styles";
document.querySelector(".styleh3").textContent=styleH3;
var viewstyle=document.querySelector("."+currentmenu.textContent+"Style");

//to Select all Style BUTTONS

var styles=document.querySelectorAll(".style");
var styleslen=styles.length;
var currentstyle=document.querySelector(".style.selected");

//TO Select all tools ELEMENT

var tools=document.querySelectorAll(".tool");
var toolslen=tools.length;

for(var i=0;i<menuslen;i++){
  menus[i].addEventListener("click",function(){
    console.log(currentstyle.classList);
    currentmenu.classList.toggle("active");
    viewstyle.classList.toggle("hidden");
    currentmenu=this;
    viewstyle=document.querySelector("."+this.textContent+"Style");
    viewstyle.classList.toggle("hidden");
    changeMenu(currentmenu);
  });
}

for(var i=0;i<styleslen;i++){
  styles[i].addEventListener("click",function(){
    currentstyle.classList.toggle("selected");
    currentstyle=this;
    // alert(currentstyle);
    changestyle(currentstyle);
  });
}

for(var i=0;i<toolslen;i++){
  tools[i].addEventListener("click",function(){
    // alert("wie");
    if(this.id==="random"){
      random();
    }
    else{
      download();
    }
  });
}
function changeMenu(currentmenu){
  currentmenu=document.querySelector("#"+currentmenu.id);
  currentmenu.classList.toggle("active");                             //TOGGLE
  styleh3=currentmenu.textContent+" Styles";
  document.querySelector(".styleh3").textContent=styleh3;
}

function changestyle(currentstyle){
  currentstyle.classList.add("selected");
  var styleelement=document.querySelector("#"+currentstyle.id);
  changeimage(currentmenu.id,styleelement.id);
  // alert(currentmenu.id);
  // alert(styleelement.id);
}

function changeimage(menu,img){
  var imgsrc=menu+"/"+img+".png";
  var imgSelector=document.querySelector("#"+menu+"pic");
  imgSelector.src=imgsrc;
}

function random() {
  menulen = menustylee.length;
  accessorieslen = accessoriesstylee.length;
  backgroundlen = backgroundsstylee.length;
  earslen = earsstylee.length;
  eyeslen = eyesstylee.length;
  mouthlen = mouthstylee.length;
  leglen = legstylee.length;
  hairlen = hairstylee.length;
  for (var i = 0; i < menulen; i++) {
    switch (menustylee[i]) {
      case "accessories":
        randomNumber = Math.floor(Math.random() * accessorieslen);
        changeimage(menustylee[i], accessoriesstylee[randomNumber]);
        break;
      case "backgrounds":
        randomNumber = Math.floor(Math.random() * backgroundlen);
        changeimage(menustylee[i], backgroundsstylee[randomNumber]);
        break;
      case "ears":
        randomNumber = Math.floor(Math.random() * earslen);
        changeimage(menustylee[i], earsstylee[randomNumber]);
        break;
      case "eyes":
        randomNumber = Math.floor(Math.random() * eyeslen);
        changeimage(menustylee[i], eyesstylee[randomNumber]);
        break;
      case "hair":
        randomNumber = Math.floor(Math.random() * hairlen);
        changeimage(menustylee[i], hairstylee[randomNumber]);
        break;
      case "leg":
        randomNumber = Math.floor(Math.random() * leglen);
        changeimage(menustylee[i], legstylee[randomNumber]);
        break;
      case "mouth":
        randomNumber = Math.floor(Math.random() * mouthlen);
        changeimage(menustylee[i], mouthstylee[randomNumber]);
        break;
      case "neck":
        randomNumber = Math.floor(Math.random() * necklen);
        changeimage(menustylee[i], neckstylee[randomNumber]);
        break;
      default:
        break;
    }
  }
}


function download(){

}
