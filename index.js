var a=document.querySelectorAll(".drum").length;
for(var i=0;i<a;i++)
{
  document.getElementsByClassName("drum")[i].addEventListener("click",function(){
    var key= this.innerHTML;
    addanimation(key);
    switch (key) {
        case "w":var au1=new Audio("sounds/tom-1.mp3");
        au1.play();
        break;
        case "a":var au2=new Audio("sounds/tom-2.mp3");
        au2.play(); 
        break;
        case "s":var au3=new Audio("sounds/tom-3.mp3");
        au3.play();
        break;
        case "d":var au4=new Audio("sounds/tom-4.mp3");
        au4.play();
        break;
        case "j":var au5=new Audio("sounds/snare.mp3");
        au5.play();
        break;
        case "k":var au6=new Audio("sounds/crash.mp3");
        au6.play();
        break;
        case "l":var au7=new Audio("sounds/kick-bass.mp3");
        au7.play();
        break;
        default:var au8=new Audio("sounds/tom-1.mp3");
        au8.play();
        break;
}
}); 
}
document.addEventListener("keydown",function(event){
    var key= event.key;
    addanimation(key);
    switch (key) {
        case "w":var au1=new Audio("sounds/tom-1.mp3");
        au1.play();
        break;
        case "a":var au2=new Audio("sounds/tom-2.mp3");
        au2.play(); 
        break;
        case "s":var au3=new Audio("sounds/tom-3.mp3");
        au3.play();
        break;
        case "d":var au4=new Audio("sounds/tom-4.mp3");
        au4.play();
        break;
        case "j":var au5=new Audio("sounds/snare.mp3");
        au5.play();
        break;
        case "k":var au6=new Audio("sounds/crash.mp3");
        au6.play();
        break;
        case "l":var au7=new Audio("sounds/kick-bass.mp3");
        au7.play();
        break;
        default:alert("press only keys which are mentioned");
        break;
}
});
function addanimation(key){

  var pressedbutton=document.querySelector("."+key);
  pressedbutton.classList.add("pressed");
  setTimeout(function () {pressedbutton.classList.remove("pressed")
    
  },100);
}