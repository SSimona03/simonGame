





//Capture which button was clicked / animate / play song
function onButtonClick (){
   
    const clickedElement = $(this);
   
    changeButtonColor(clickedElement);
    makeSoundOnClick(clickedElement);
}

const changeButtonColor =(element) => {
    
    // console.log(element);

    element.addClass("pressed");
    setTimeout(function(){ (element).removeClass("pressed"); }, 220);
}
 
 const makeSoundOnClick =(element)=>{
    
    //console.log(element.attr('id'));
    var playAudio = new Audio("sounds/"+element.attr('id')+'.mp3');
    playAudio.play();

 }

$(".btn").click(onButtonClick);


//// start the key - waiting for keypress

   $(document).keypress(function(event){
       play();
    //    if (levelNr == 0){
    //        count = 0;
           
    //    }
    
    })

 //*** variables
let levelNr = 0;
let cubes = ["green","red","yellow","blue"];  
let arrayLevels =[];
// let arrayUserMemory =[];
let count = 0;

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

  function play(){

        levelNr += 1;
        count = 0;
        
        $("#level-title").text("Level " + levelNr);
 
        let randomNumber = Math.floor(Math.random() * 4);
        let randomCubeId = arrayLevels.push(`${cubes[randomNumber]}`);
    
        playCurrentLevel();
        


}
         $(".btn").click( async function (){  
                  

                //let addToUserArray = arrayUserMemory.push(this.id);
                let currentClick = this.id;
               
                // console.log("USER "+ currentClick + " PC "+ arrayLevels[count] + " "+ count);   
                // console.log(currentClick, arrayLevels[count], count, currentClick === arrayLevels[count])

                

                 if(currentClick != arrayLevels[count] ){
                //    console.log("USER "+ currentClick + " PC "+ arrayLevels[count] + " "+ count); 
                //    console.log("out");
                 $("#level-title").text("GameOver, Click To Start Over!")
                    var playAudio = new Audio("sounds/wrong.mp3");
                    playAudio.play();

                   return;

                }


                if( count == arrayLevels.length -1){
                    await new Promise(resolve => setTimeout(resolve, 800));
                    play();
                    return;

                    };

             
                count+=1;  
                
           });



async function playCurrentLevel(){

        for (const i of arrayLevels) {
            //console.log(arrayLevels);
            await new Promise(resolve => setTimeout(resolve, 800));
            changeButtonColor($("."+i));
            makeSoundOnClick($("."+i));
           
        }
}
       


