var gameState = 0;
var btnInicar;

function setup(){
 createCanvas(800,400);

 btnInicar = createButton("Iniciar");
 btnInicar.position(400,200);
 btnInicar.mousePressed(()=>{
     gameState = 1;
 })
}

function draw(){
     background(0);

     if(gameState === 0){
            //start game
           
          
     }

     if(gameState === 1){
            //Escolha seu personagem
            console.log("escolha seu personagem")
            btnInicar.hide();
     }

     if(gameState === 2){
          //Escolha a fase
   }


     drawSprites();
}