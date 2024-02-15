noCount = 0;
runTimes = 0;
stop = false; 
stopCount = 0;
moveSide = 0; 
rightSide = true;
downSide = true; 
moveDownCount = 0;
canTalk = false;
firstStop = true;
messageToShow = 0;

texts = ["No tengo porque detenerme mientras hablo, pero me gusta verte para ver tu sonrisa cuando lo leas :D",
"Esta fue la canción que sonaba mientras programé esto: Sex on Fire Kings Of Leon",
"ChatGPT me ayudo mucho y el titulo que él asigno al chat fue 'Preparativos para el 14'",
"Me gustas mucho ♥",
"Amo como descubro cosas nuevas que me gustan y nunca lo había imaginado",
"Hay que terminar de leer nuestro libro, el divertido",
"Deberiamos de planear unas vacaciones para nosotros",
"♥ Te amo ♥",
"Ganar mucho dinero para tener todo lo que queremos, siksi",
"Nos hemos enseñado muchas cosas sigamos aprendiendo, aprendiendo juntos",
"Me encanta la idea de apoyarte en el veganismo, aunque me gustaría saber más",
"¿Puedo comprar un expreso en nuestra próxima cita?",
"Quiero ir a patinar sobre hielo, pero también quiero unos patines, ¿Vamos a comprarlos?",
"El 13 de febrero busqué flores, llame a la florería dijo que estaba abierto, fui y estaba cerrado :(",
"¿Cómo crees que cortarme las uñas siendo un ghost? JAJAJA",
"Sin qué te des cuenta, te miro y sonrio por lo feliz que soy contigo",
"Aún tengo miedos y dudas pero junto a ti todo se ve mejor :)",
"Hay que dominar al mundo >:D",
"Recopilar las fotos del fondo fue un viaje con muchas emociones",
"Sé que no tengo todas las fotos pero necesitamos más fotos",
"Puedo salirme de la pantalla, me programaron para ser libre :D",
"Hay un audio secreto en la pagina del si y no con los corazones, ¿Ya lo escuchaste?"]

setInterval(() => {
    photos = document.getElementById("photoMemory");
    photos.src = "assets/photo" + Math.floor((Math.random()*45)+1) + ".png";
    console.log("foto colocada"); 
}, 2500);

setInterval(moveCow,30);


function cowTouch(){
    alert("Si me tocas claro que seguiré diciendo Muuu... muuuuu");
}

function moveCow(){    
    cowImage = document.getElementById("cowImage");        

    direction = Math.random() * 500 + 1    

    //Mover a la derecha
    if (direction <= 180 && !stop ){        
        currentPosition = cowImage.offsetLeft;
        //Derecha o izquierda
        if(rightSide){            
            cowImage.style.left = currentPosition + 2 + 'px';    
        }else{            
            cowImage.style.left = currentPosition - 2 + 'px';    
        }       
        cowSaySomething();    
    }
    
    //Mover hacia arriba y hacia abajo
    if ( direction >= 410 && !stop ){                           
        currentPosition = cowImage.offsetTop;  
        if(downSide){
            cowImage.style.top = currentPosition + 1 + 'px';           
        }else{
            cowImage.style.top = currentPosition - 1 + 'px';       
        }                
        cowSaySomething();
    }

    if(direction > 499 && direction < 499.30){
        canTalk = true;
        cowSaySomething();
    }

    if(moveDownCount == 200){
        console.log("Evaluando hacia arriba o hacia abajo : " + Math.floor(direction))
        if(Math.floor(direction) % 2 == 0 ){
            //Arriba
            console.log("Hacia arriba")
            downSide = false;
            
        }else{            
            //Abajo
            console.log("Hacia abajo")
            downSide = true;
        }   
        moveDownCount = 0;     
    }

    //if para actualizar el lado al que mira la vaca derecha/izquierda
    if(moveSide == 200){
        console.log("*****************************************************************")
        console.log("Direction: " + Math.floor(direction) % 2)
        console.log("Direction" + Math.floor(direction) % 2 == 0 )
        if(Math.floor(direction) % 2 == 1){
            //derecha
            rightSide = true;
            cowImage.style.transform = "scaleX(1)";
            
        }else{
            //izquierda
            rightSide = false;
            cowImage.style.transform = "scaleX(-1)";
        }
        moveSide = 0;
    }

    
    //ifs para colocar la vaca de frente
    if (direction > 80 && direction < 81 && !stop){
        
        cowImage.src = "assets/cow-front.png"   
        stop = true;
        //Mensaje que vamos a mostrar con un math.random
        console.log(texts.lenght)
        messageToShow = Math.floor(Math.random()* 20 + 1)
    }

    if (stop){
        if(!firstStop){
            canTalk = true; 
            cowSaySomething();    
        }
        firstStop = false;
        stopCount += 1;                         
    }

    if (stopCount == 250){
        
        stopCount = 0; 
        cowImage.src = "assets/cow-left.png"   
        stop = false; 
        canTalk = false;
    }
    moveSide += 1;
    moveDownCount += 1;
}


function cowSaySomething(){

    cowImage = document.getElementById("cowImage");        

    globe = document.getElementById("imgDialogue"); 
    text = document.getElementById("textDialogue")    
    if(canTalk){
        console.log("visible")
        visibilityOption = "visible";
        posY = cowImage.offsetTop - globe.height;
        posX = cowImage.offsetLeft;    
    
        globe.style.left = ( posX - (globe.height*3/5))+ "px" ; 
        globe.style.top=  (posY)+ "px";
        text.style.left = (posX - (globe.width*3/5))+ "px" ; 
        text.style.top=  (posY)+ "px";       
        text.textContent = texts[messageToShow]
        
    }else{              
        visibilityOption = "hidden";
    }

    globe.style.visibility = visibilityOption;
    text.style.visibility = visibilityOption;
}