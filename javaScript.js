



//*** variables
let currentLevel ;
let cubes = ["green","red","yellow","blue"];


//Capture which button was clicked / animate / play song
function onButtonClick (){
   
    const clickedElement = $(this);
   
    changeButtonColor(clickedElement);
    makeSoundOnClick(clickedElement);
}

const changeButtonColor =(element) => {
    
    console.log(element);

    element.addClass("pressed");
    setTimeout(function(){ (element).removeClass("pressed"); }, 220);
}
 
 const makeSoundOnClick =(element)=>{
    
    console.log(element.attr('id'));
    var playAudio = new Audio("sounds/"+element.attr('id')+'.mp3');
    playAudio.play();

 }

$(".btn").click(onButtonClick);


//// start the key - waiting for keypress

   $(document).keypress(function(event){
       play();
    })
     

function play(){

    if(currentLevel == null){
    currentLevel = 0;
    $("#level-title").text("Level " + currentLevel);
    
    let randomNumber = Math.floor(Math.random() * 4);
    let randomCubeId = `#${cubes[randomNumber]}`

    changeButtonColor($(randomCubeId));

     

    }

}



 



