noCount = 0;
runTimes = 0;
stop = false; 
stopCount = 0;
moveSide = 0; 
rightSide = true;
downSide = true; 
moveDownCount = 0;
countCow = 0;

yesBotonConst = '<button class="yes" onclick="yesOption()">Yes</button>'

function noOption(){
    beMyValentine = document.getElementById("textValentine");
    noBoton = document.getElementsByClassName("no")[0];
    if (noCount == 0){
        beMyValentine.innerHTML = "Sé que te equivocaste, claramente no querías presionar ese botón, vamos de nuevo... PLEASE, be my valentine :)";
    }
    if (noCount == 1){
        beMyValentine.innerHTML = "Empiezo a creer que el anterior no fue accidente... ¿Acaso no quieres ser my valentine?";
    }
    if (noCount == 2){
        beMyValentine.innerHTML = "Ahí me dijiste que no, o sea que si porque esta negada y negada negada pues es un si, ¿algo así iba?";
    }
    if (noCount == 3){
        beMyValentine.innerHTML = "Me la estás poniendo muy dificil, vamos a ver... ¿Estás molestandome picandole al no? ";
    }
    if (noCount == 4){
        beMyValentine.innerHTML = "JA-JA-JA ¿Puedes dejar de presionar el botón de no y ya decirme que si?";
    }
    if (noCount == 5){
        beMyValentine.innerHTML = "Fue gracioso las primeras 5 veces, ahora me estoy preocupando...";
    }
    if (noCount == 6){
        beMyValentine.innerHTML = "¿De verdad no dejarás de decir que NO?";
    }
    if (noCount == 7){
        beMyValentine.innerHTML = "...";
    }
    if (noCount == 8){
        beMyValentine.innerHTML = "Mh...";
    }
    if (noCount == 9){
        beMyValentine.innerHTML = "Muy bien, yo fui el que te puso el botón 'no' al alcance, pero ya no nos preocuparemos por eso :)";
        noBoton.removeEventListener("onCLick", noOption)
        noBoton.addEventListener("mouseover", runBoton)        
        noBoton.addEventListener("onCLick", runBoton)
        runBoton()
    }
    noCount++;
}

function runBoton(evento){
    beMyValentine = document.getElementById("textValentine");  

    try{   
        anchoVentana = window.innerWidth -100;
        altoVentana = window.innerHeight -100;
        noBoton = document.getElementsByClassName("no")[0];    
        noBoton.style.position = "absolute";
        document.body.insertBefore(noBoton, document.body.firstChild);
    
        do{    
            rndTopPos = Math.random() * altoVentana;
            rndLeftPos = Math.random() * anchoVentana;            
        }while(Math.abs(noBoton.offsetLeft - rndLeftPos) < 300 && Math.abs(noBoton.offsetTop - rndTopPos) < 200);                

        noBoton.style.left = rndLeftPos + "px";
        noBoton.style.top = rndTopPos + "px";    
    }catch (error){
        console.log("Error de botón: " + error)
    }

    if (runTimes == 28){
        alert("O sea que vas a seguir el no hasta alcanzarlo...");
        alert("Me dejaste sin opciones, ya no te dejaré picarle a la página...");
        alert("...");
        alert("...");
        alert("Esta bien, te daré una oportunidad más, no vayas a confundirte de botón y dale al que diga 'Yes' :D");
        document.getElementsByClassName("no")[0].remove();
        questions = document.getElementsByClassName("questions")[0];
        howManyYES = Math.random()*50 + 5 
        for(i=0; i < howManyYES; i++){
            document.body.insertAdjacentHTML("beforeend", generateRandomYESBotons())              
        }
        noCount += 1; 
        beMyValentine.innerHTML= "Mi amada, mi querida, dama de mis sueños y despertarés, ¿Verdad que quieres ser my valentine? :D"
        
        //questions.insertAdjacentHTML("beforeend", yesBotonConst);
    }
    runTimes++;
    
}

function yesOption(){
    beMyValentine = document.getElementById("textValentine");
    if (noCount == 0){
        beMyValentine.innerHTML = "Sabía que desde el inicio me dirías que si, gracias por ser mi novia amor";
    }
    if (noCount == 1){
        beMyValentine.innerHTML = "Obviamente yo sabía que te habías equivocado, siempre quisiste decir que si, gracias por ser mi novia amor";
    }
    if (noCount == 2){
        beMyValentine.innerHTML = "Lo sabía, solo podía tratarse de un error :D Gracias por ser my valentine <3";
    }

    if (noCount == 3){
        beMyValentine.innerHTML = "Viste, claro que sé redactar, obviamente entendí bien, siempre quisiste ser mi novia, gracias <3";
    }

    if (noCount == 4){
        beMyValentine.innerHTML = "Ya sabía que solo me estabas molestando y si me ibas aceptar, gracias por ser mi novia mi amor :D";
    }

    if (noCount == 5){
        beMyValentine.innerHTML = "Tengo que decir que hasta a mi me parecio chistoso JAJAJA Gracias por ser mi novia, preciosa";
    }

    if (noCount == 6){
        beMyValentine.innerHTML = "Siempre me preocupo a lo menso, claro que quieres ser my valentine, muchas gracias mi amor por querer estar aquí uwu";
    }

    if (noCount == 7){
        beMyValentine.innerHTML = "Obvio tenía que haber un momento en el que dejarías de presionar ese botón, buena decisión. Gracias por ser mi novia <3";
    }

    if (noCount == 8){
        beMyValentine.innerHTML = "Esto solo fue un silencio para que analizarás la página y encontrarás el botón correcto, ya lo encontraste, bien hecho, gracias por ser mi novia";
    }

    if (noCount == 9){
        beMyValentine.innerHTML = "Casi casi iba a cometer una locura, espero que no le continues dando que No JAJAJAJA gracias por ser my valentine <3";
    }

    if (noCount == 10){
        beMyValentine.innerHTML = "Viste, no era tan dificil escoger el botón correcto, que bueno que no continuaste persiguiendo el botón porque si no... bueno, muy bien mi amor, muy bien hecho, gracias por ser mi novia y darme el si <3";
    }

    if(noCount == 11){
        beMyValentine.innerHTML = "A veces puede ser complicado encontrar el botón correcto, pero sabía que tu escogerías con toda libertad la mejor decisión, gracias por libremente escoger ser mi novia <3";
    }

    if (noCount > 100){
        beMyValentine.innerHTML = "No sé como llegaste aquí, ¿Podrías explicarme? Deberías de ser QA porque acabas de encontrar un bug";
    }

    //COdigo para remover los botones yes or not. 
    yesBotons = document.getElementsByClassName("yes");

    Array.from(yesBotons).forEach(btn => {
        btn.remove();
    });

    try{
        document.getElementsByClassName("yes")[0].remove()
    } catch (error) {
        console.log ("No existía el segundo elemento yes")
    }

    try{
        document.getElementsByClassName("no")[0].remove()
    } catch (error) {
        console.log ("No existía el elemento no")
    }

    //inicia la vaca
    setInterval(moveCow, 10);
    generateHeartsInScreen();    
    
    //COdigo para decir feliz 14 de febrero
}

function generateRandomYESBotons(){
    anchoVentana = window.innerWidth;
    altoVentana = window.innerHeight;

    posX = Math.random() * anchoVentana;
    posY = Math.random() * altoVentana;    
    newPositionStyle = 'style= "position: fixed; top:' + posY + 'px; left:'+  posX + 'px;"'
    return '<button class="yes" onclick="yesOption()"' + newPositionStyle + '>Yes</button>'
}

//Al cargar la pagina que puedo hacer?
window.onload = function(){

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
    }
    
    //Mover hacia arriba y hacia abajo
    if ( direction >= 410 && !stop ){                      
        currentPosition = cowImage.offsetTop;  
        if(downSide){
            cowImage.style.top = currentPosition + 1 + 'px';           
        }else{
            cowImage.style.top = currentPosition - 1 + 'px';       
        }                
    }

    if(moveDownCount == 200){        
        if(Math.floor(direction) % 2 == 0 ){
            //Arriba
            downSide = false;
            
        }else{            
            //Abajo
            downSide = true;
        }   
        moveDownCount = 0;     
    }

    //if para actualizar el lado al que mira la vaca derecha/izquierda
    if(moveSide == 200){
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
    if (direction > 50 && direction < 50.45 && !stop){
        cowImage.src = "assets/cow-front.png"   
        stop = true
    }

    if (stop){
        stopCount += 1         
    }

    if (stopCount == 150){
        stopCount = 0; 
        cowImage.src = "assets/cow-left.png"   
        stop = false; 
    }
    moveSide += 1;
    moveDownCount += 1;
}

function cowTouch(){        
    countCow += 1;
    if(countCow == 5){
        alert("Ven, sigueme, tengo que mostrarte algo");
        alert("...");
        alert("Pero vayamos a mi lugar favorito");
        // Redirigir a otra página después de 2 segundos
        setTimeout(function() {
            window.location.href = "muchlove.html"; // Cambia "nueva_pagina.html" por la URL de la página a la que deseas redirigir
        }, 2000); // 2000 milisegundos (2 segundos)
    }else{
        alert("Muuuuu");
    }
}

function generateHeartsInScreen(){
    heartsDiv = document.getElementsByClassName("hearts")[0];    
    for (i = 0 ; i < Math.floor(Math.random() * 250 + 50) ; i++){
        heartGenerated = randomHeartsTags(heartsDiv);        
        heartsDiv.insertAdjacentHTML("afterbegin", heartGenerated);        
    }   
}

function randomHeartsTags(element){
    anchoVentana = window.innerWidth;
    altoVentana = window.innerHeight; 

    randomSize = "width:"+ Math.random()*190 + "px;";

    posX = 'left:' + Math.random()*anchoVentana + 30 + 'px;';
    posY = 'top:' + Math.random()*altoVentana + 30 +'px;';     

    element.style.left = posX + 'px';
    element.style.top = posY + 'px';
    element.style.width = randomSize;

    styleHeart = ' style="' + posX + posY + randomSize + '"';

    if(Math.floor(Math.random()*10) %2 == 0){
        srcImage = '"assets/green-heart.png"'
    }else{
        srcImage = '"assets/yellow-heart.png"'
    }        
    
    return '<img onclick = "popheart(event)"' + styleHeart +  'class="heart" src=' + srcImage + '></img>';

}

var intervalIds = {};

function popheart(event){
    var heartElement = event.target;
    var heartId = heartElement.dataset.id; // Obtiene el ID único del corazón

    // Limpia cualquier intervalo previamente asociado con este corazón
    clearInterval(intervalIds[heartId]);

    // Calcula el ancho máximo y asigna un nuevo intervalo para este corazón
    var maxWidthPop = Math.random() * 500 + 100;
    intervalIds[heartId] = setInterval(function() {
        var widthHeart = heartElement.offsetWidth; // Obtiene y actualiza el ancho actual del corazón en cada iteración
        var posXHeart = heartElement.offsetLeft;
        var posYHeart = heartElement.offsetTop;

        heartElement.style.left = (posXHeart - 5) + "px";
        heartElement.style.width = (widthHeart + 10) + "px";
        heartElement.style.top = (posYHeart - 5) + "px";

        if(widthHeart > (maxWidthPop - 450) && widthHeart < (maxWidthPop - 350)){            
            if(Math.floor(Math.random()*15) == 4){                
                popSound(true);
            }
        }

        if (widthHeart > maxWidthPop) {
            heartElement.style.display = 'none';
            clearInterval(intervalIds[heartId]); // Detiene el intervalo asociado con este corazón
            popSound(false); // Detiene el sonido asociado con este corazón
        }
    }, 25);
}
function popSound(loveSound){
    
    if(loveSound){
        soundTag = document.getElementById("popLoveSoundTag");
        soundTag.src = "assets/sounds/poplove" + Math.floor((Math.random()*2)+1) + ".mp3";
    }else{  
        if(Math.floor((Math.random()*150)+1) == 3){
            soundTag.src = "assets/sounds/secretsound.mp3";
        }else{
            if(Math.floor((Math.random()*35)+1) == 3){
                soundTag.src = "assets/sounds/pop3.mp3";
            }else{
                soundTag = document.getElementById("popSoundTag");      
                soundTag.src = "assets/sounds/pop" + Math.floor((Math.random()*2)+1) + ".mp3";
            }
        }                        
    }    
    soundTag.play();
}







