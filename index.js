var l=document.querySelectorAll(".drum").length;
for(var i=0;i<l;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        buttonP=this.innerHTML;
        playAudio(buttonP);
        buttonAnimation(buttonP);
    })

    document.addEventListener("keydown",function(event){
        playAudio(event.key);
        buttonAnimation(event.key);
        })
    }
function playAudio(k){
    switch(k)
    {
        case 'w':
            var a=new Audio("sounds/tom-1.mp3");
            a.play();
            break;
            case 'a':
            var a=new Audio("sounds/tom-2.mp3");                a.play();
            break;
        case 's':
            var a=new Audio("sounds/tom-3.mp3");
            a.play();
            break;
        case 'd':
            var a=new Audio("sounds/tom-4.mp3");
            a.play();
            break;
        case 'j':
            var a=new Audio("sounds/snare.mp3");
            a.play();
            break;
            case 'k':
            var a=new Audio("sounds/kick-bass.mp3");
            a.play();
            break;
        case 'l':
            var a=new Audio("sounds/crash.mp3");
            a.play();
            break;
        default:
            console.log(key);
    }
}
function buttonAnimation(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+currentKey).classList.remove("pressed");
    },100);
} 