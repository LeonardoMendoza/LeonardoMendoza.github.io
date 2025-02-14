const cloudsIMG = [
    "cloud1.png",
    "cloud2.png",
    "cloud3.png",
    "cloud4.png",
    "cloud5.png",
    "cloud6.png",
    "cloud7.png"
]

let heartInterval
let fallingLetterInterval
let g_maxSpeedCloud = 3
let g_letterSpawnTimer = 0 
let letterDrop = false
let scaleValue = 0.001
let rotationSide = true
let exploded = false
let textoHoja = "Te invito a cenar en casa el sábado a las 17:00 hrs. Espero tu confirmación ♥ Be my valentine ♥"
let stepDialogMonoManon = 0
let moviendo = false;
let lettersRemoved = 0

cloudsInScreen = []

startClouds = Math.floor(Math.random()*100+10)

for (let i = 0 ; i < startClouds ; i++){
    addCloud()
}

setInterval(moveClouds, 2)

dropDownLetterInterval = setInterval(dropDownLetter, 500)

function createCloud(cloudNumber){
    let tempDiv =  document.createElement('div');

    rndNumberCloud = cloudsIMG[cloudNumber]

    positionX = - Math.floor(Math.random()*4500+200) + "px"

    rndYPosition = Math.floor(Math.random() * window.innerHeight)

    if(rndYPosition > window.innerHeight - 200){
        rndYPosition -= 100
    }

    if(200 < window.innerHeight){
        rndYPosition -= 160
    }

    positionY = rndYPosition + "px"

    mirrorEffect = "transform: "
    mirrorEffect += Math.floor(Math.random()* 2)  == 1 ? "scaleX(-1);" : "scaleX(1);"

    stylestr = "' style = 'position: absolute; left:" + positionX +"; top: " + positionY +"; width: 20%; height: auto;" + mirrorEffect + "'"

    newCloud = "<img class='classCloud' src='assets/" + rndNumberCloud + stylestr + ">"    

    tempDiv.innerHTML = newCloud

    cloudsInScreen.push(tempDiv.firstChild)
    divCloud = document.getElementById("clouds")

    for (let i = 0 ; i < cloudsInScreen.length; i++){
        divCloud.appendChild(cloudsInScreen[i])  
    }
        
        
}


function moveClouds(){
    clouds = document.querySelectorAll('.classCloud')
    cloudsToCreate = 0
    g_letterSpawnTimer += 1 

    clouds.forEach(cloud => {
        randomXSpeed = Math.floor(Math.random()*g_maxSpeedCloud)
        let actualPosX = parseFloat(cloud.style.left);        

        if(actualPosX < window.innerWidth ){
            //Mover nube
            cloud.style.left = actualPosX + randomXSpeed + "px"            
        }
        else{
            //Eliminar nube
            cloud.remove()                         
            if(Math.floor(Math.random()*3) == 1 && document.querySelectorAll('.classCloud').length < 60){
                cloudsToCreate = Math.floor(Math.random()*2 + 1 )              
            }
        }
        for(let i = 0; i < cloudsToCreate; i++){
            addCloud()
        }
        
    });
}

function addCloud(){

    rndNumberCloud = Math.floor(Math.random()*6 + 1 )

    if(rndNumberCloud != 6){
        createCloud(rndNumberCloud)
    }
    else{        
        if(Math.floor(Math.random()*40) == 5){
            createCloud(rndNumberCloud)
        }
    }
}

function dropDownLetter(){
    if(g_letterSpawnTimer > 200 && !letterDrop){
        letterDrop = true        
        divLetter = document.getElementById("letter")
        
        hearthIMG = "<img src='assets/green-heart.png' id='letter-heart' onclick='heartExplode()'>"
                
        divLetter.innerHTML = hearthIMG               

        fallingLetterInterval = setInterval(fallingLetter,50)
    }
}

function fallingLetter(){

    letter = document.getElementById("letter")         
    var topActual = parseInt(window.getComputedStyle(letter).top);    
    newTop = topActual  + 5
    
    letter.style.top = newTop + "px"
    letter.style.animation = "swing 2s ease-in-out infinite";
    
    if(newTop > 0 ){        
        clearInterval(fallingLetterInterval)
        letter.style.transform = "scale(0.4) "
    }
    
}

function heartExplode(){
    if(!exploded){
        exploded = true
        heartInterval = setInterval(heartBOM, 100)
        
    }
    
}

function heartBOM(){
    heart = document.getElementById("letter-heart")
    scaleValue += 0.1 
    rotate = rotationSide ? "45deg " : "-45deg"
    rotationSide = !rotationSide
    heart.style.transition = "transform 0.6s ease-out"; 

    heart.style.transform = "translate(-50%, -50%) scale(" +  scaleValue + ") rotate(" + rotate + ")"             

    if(scaleValue > 3){ //Scale value colocarlo al 3
        let popAudio = new Audio("assets/pop-heart.mp3")
        popAudio.play()        

        letterheart = document.getElementById("letter-heart")
        heartLetterTop = parseInt(window.getComputedStyle(letterheart).top);
        heartLetterLeft = parseInt(window.getComputedStyle(letterheart).left);
        
        document.getElementById("letter-heart").remove()

        clearInterval(heartInterval)
        clearInterval(fallingLetterInterval)
        clearInterval(dropDownLetterInterval)

        document.getElementById("letter").style.animation ="none"

        hojaSpawn(heartLetterLeft,heartLetterTop)   
        monoManonEntry()        
    }
}

function hojaSpawn(heartLetterLeft,heartLetterTop){

    body = document.body

    var hojaDiv = document.createElement('div');

    hojaDiv.id = 'hoja'; 
    

    tempIMG = new Image();
    tempIMG.src = "assets/HojaB.png"

    tempIMG.onload = function() {

        hojaDiv.style.width = tempIMG.height + 'px';
        hojaDiv.style.height = tempIMG.width + 'px';
        hojaDiv.style.top = heartLetterTop + "px"
        hojaDiv.style.left = heartLetterLeft + "px"
        
        body.appendChild(hojaDiv);
        //writeInvitationForHoja()
        createLetterForHojaSpans(heartLetterTop , heartLetterLeft)
        wind()
        lettersDispersion()       

    }
}

function createLetterForHojaSpans(heartLetterTop , heartLetterLeft){

    hoja = document.getElementById("letterStack")

    for (let i = 0; i < textoHoja.length; i++){
        console.log("Creando letter span")
        letterHoja = document.createElement("span")
        letterHoja.classList.add("letterHoja")
        letterHoja.textContent = textoHoja[i]
        letterHoja.style.position = 'absolute'
        letterHoja.style.transition = 'transform 1s ease-out'             
        letterHoja.style.left = heartLetterLeft + Math.floor(Math.random()*200 - 150)  + "px"
        letterHoja.style.top = heartLetterTop + Math.floor(Math.random()*200 - 150)  + "px"
        

        hoja.appendChild(letterHoja)
    }
}

function writeInvitationForHoja(){   
    let sound = new Audio("assets/letter_down_sound.mp3")
    sound.play() 
    hoja = document.getElementById("hoja")
    
    letterHoja = document.createElement("span")
    letterHoja.classList.add("invitationHoja")
    letterHoja.textContent = textoHoja

    hoja.appendChild(letterHoja)
}


function lettersDispersion(){    
    

    hoja = document.getElementById("hoja")        
    letters = document.querySelectorAll(".letterHoja")

    letters.forEach(letter => { 
        moverLetra(letter)
    })

    
    
    hoja.style.animation = "moveHoja 2s ease-in-out forwards"
    
}

function moverLetra(letra) {
    let dx = (Math.random() - 0.5) * (window.innerWidth); 
    let dy = (Math.random() - 0.5) * (window.innerHeight);
    
    letra.style.setProperty('--dx', `${dx}px`);
    letra.style.setProperty('--dy', `${dy}px`);
    letra.style.animation = 'moveLetters 2s ease-in-out forwards';
}


function wind(){
    let sonido = new Audio("assets/wind.mp3");
    sonido.play()
    windDiv = document.getElementById("wind")
    
    windCountParticles = Math.floor(Math.random()*10 + 5)

    for(let i =0 ; i < windCountParticles ; i++) {

        windParticle = document.createElement("img")
        windParticle.src = "assets/Wind"+ Math.floor(Math.random()* 3 + 1) + ".png"
        windParticle.classList.add("winds")
        windParticle.style.top = randomPosYInScreen() - 400 + "px"
        windParticle.style.left = randomPosXInScreen() - 800 + "px"        

        g_maxSpeedCloud = 20
        
        windParticle.addEventListener("animationend", function(){                     

            let windParticles = document.querySelectorAll(".winds");
        
            windParticles.forEach(function(particle) {
                particle.remove(); 
            });
            g_maxSpeedCloud = 3
        })

        windDiv.appendChild(windParticle)        
    }
}

function randomPosXInScreen(){
    x = Math.random() * window.innerWidth
    console.log(x)
    return x;
}


function randomPosYInScreen(){
    y = Math.random() * window.innerHeight
    console.log(y)
    return y;
}

function monoManonEntry(){
    monoManon = document.getElementById("monoManon")

    monoManon.style.top = -window.innerHeight/2  + "px"
    monoManon.style.left = "-500px"
    monoManon.style.opacity = "1";
    monoManon.classList.add("monoManon");

    monoManon.addEventListener("animationend", function(){
        monoManonFirstPosition()

    })

}

function dialogFromMonoManon(message){


    monoManon = document.getElementById("monoManon")

    let rect = monoManon.getBoundingClientRect();
    dialogo = document.createElement("span")
    dialogo.classList.add("dialog")
    dialogo.textContent = message
    dialogo.style.left = rect.left + 50 + "px"
    dialogo.style.top = rect.top - 100 + "px" 
    
    
    dialogo.addEventListener("click", function(){
        dialogo.remove()
        stepDialogMonoManon += 1 
        switch(stepDialogMonoManon){
            case 1: 
                dialogFromMonoManon("¿Cómo estás? :D ")
            break;
            case 2 :
                dialogFromMonoManon("¿PORQUÉ LA PANTALLA ESTA LLENA DE LETRAS?")
                monoManonWorried()
            break;
            case 3 :
                dialogFromMonoManon("¡Es la carta! Con el viento las letras se cayeron")
                monoManonWorried()
            break;
            case 4:
                dialogFromMonoManon("Pero no te preocupes, para eso siempre cargo con mi...")    
                monoManonDissapear()                
            break;
            case 5:
                dialogFromMonoManon("BUNDLE")    
                monoManonHoldBunddle()
            break;
            case 6:
                dialogFromMonoManon("Necesito de tu ayuda, yo las ordenaré...")
                moveUpDownMonoManon(-900)
            break;
            case 7:
                dialogFromMonoManon("Pero necesito que tu me lleves hacia las letras")
            break;
            case 8:
                dialogFromMonoManon("¡Dame un clic para moverme, dame otro para soltarme!")
                monoManonStartToInteract()
            break;     
            case 10:
                
                dialogFromMonoManon("¡Taraaaan! ¡Es una invitación!")
                writeInvitationForHoja()
                monoManonHoldOn()
            break;  
            case 11:
                dialogFromMonoManon("Espero puedas asistir, te estaremos esperando")                
            break;            
            case 12:
                dialogFromMonoManon("Te amamos :D ♥")
            break;
            case 13:
                dialogFromMonoManon("Te amamos :D ♥")
            break;
            case 14:
                dialogFromMonoManon("Te amamos :D ♥")
            break;
            case 15:
                dialogFromMonoManon("Te amamos :D ♥")
            break;
            case 16:
                dialogFromMonoManon("Te amamos :D ♥")
            break;
            case 17:
                dialogFromMonoManon("Te amamos :D ♥")
            break;
            case 18:
                dialogFromMonoManon("Te amamos :D ♥")
            break;
            case 19:
                dialogFromMonoManon("Te amamos :D ♥")
            break;
            case 20:
                dialogFromMonoManon("Te amamos :D ♥")
            break;
        }
    })
    document.body.appendChild(dialogo)
}

function monoManonFirstPosition(){
    monoManon = document.getElementById("monoManon")

    monoManon.classList.remove("monoManon")
    monoManon.style.top = -window.innerHeight/18  + "px"
    monoManon.style.left = "0px"
    monoManon.style.opacity = "1";
    monoManon.style.transform = "scale(0.3)"
    monoManon.style.zIndex = 101
    
    dialogFromMonoManon("Hola, el viento me trajo hasta acá\n(Dame clic en el dialogo porfa)")

}

function monoManonWorried(){
    monoManon = document.getElementById("monoManon")

    monoManon.src = "assets/monoManonWorried.png"
    monoManon.style.opacity = 1;

}

function monoManonHoldOn(){
    monoManon = document.getElementById("monoManon")
    monoManon.src = "assets/monoManonHoldSome.png"
    monoManon.style.opacity = 1;
}

function monoManonHoldBunddle(){
    monoManon = document.getElementById("monoManon")
    monoManon.src = "assets/monoManonHoldBundle.png"
    monoManon.style.opacity = 1    
    
}

function monoManonDissapear(){
    monoManon = document.getElementById("monoManon")
    monoManon.style.opacity = 0;
}

function moveUpDownMonoManon(moveCount){
    monoManon = document.getElementById("monoManon")

    let rect = monoManon.getBoundingClientRect();
    console.log(rect.top)
    console.log(moveCount)
    monoManon.style.top = rect.top + moveCount + "px"

}

function moveToMonoManon(X, Y){
    monoManon = document.getElementById("monoManon")
    let rect = monoManon.getBoundingClientRect();
    monoManon.style.top = Y + "px"
    monoManon.style.left = X + "px"

}

function monoManonStartToInteract(){
    document.getElementById("monoManon")

    monoManon.addEventListener("click", (e) => {
        moviendo = !moviendo;    
        if(moviendo){
            document.addEventListener("mousemove", moverMono);
        }else{
            document.removeEventListener("mousemove", moverMono);
        }
        
    });        
    
    function moverMono(e) {
        if (moviendo) {
            monoManon.style.position = "absolute";
            monoManon.style.left = e.pageX - monoManon.offsetWidth / 2 + "px";
            monoManon.style.top = e.pageY - monoManon.offsetHeight / 2 + "px";
            document.querySelectorAll("span").forEach(span => {
                const spanRect = span.getBoundingClientRect();
                const monoRect = monoManon.getBoundingClientRect();
        
                if (
                    monoRect.left < spanRect.right &&
                    monoRect.right > spanRect.left &&
                    monoRect.top < spanRect.bottom &&
                    monoRect.bottom > spanRect.top
                ) {
                    lettersRemoved += 1;
                    span.remove(); // Borra el span si el mono Manon lo toca
                    if (lettersRemoved >= 95) {
                        moveToMonoManon(-500,-300)
                        dialogFromMonoManon("Listo, ahora voy a ordenar las letras")
                        
                        moviendo = false
                    }
                }
            });
        }
    }
}