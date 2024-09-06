const container= document.querySelector("#container");
const containerFooter= document.querySelector("#footer");


const askingButton= document.createElement("button");
askingButton.classList="askingButton";
askingButton.textContent="Set Grid Size";
containerFooter.appendChild(askingButton);

const normalColorButton= document.createElement("button");
normalColorButton.classList="normalColorButton";
normalColorButton.textContent="Normal Color";
containerFooter.appendChild(normalColorButton);

const rgbButton= document.createElement("button");
rgbButton.classList="rgbButton";
rgbButton.textContent="Rainbow Mode";
containerFooter.appendChild(rgbButton);

const eraserButton= document.createElement("button");
eraserButton.classList="eraserButton";
eraserButton.textContent="Eraser";
containerFooter.appendChild(eraserButton);

const clearButton= document.createElement("button");
clearButton.classList="clearButton";
clearButton.textContent="Clear";
containerFooter.appendChild(clearButton);

let userInput;

divsSize(16);

askingButton.addEventListener("click", () =>{
     userInput= prompt("Put the size of the sketch board (1-100) ");
     if(userInput<1 || userInput>100){
        alert("This number is not available, select only numbers between 1 and 100")
     }else{
        deleteDivs();
        divsSize(userInput);
     }
  
});

function divsSize(Size){
    const fragment= document.createDocumentFragment();
        for(let i=0;i<Size * Size;i++){
            let divs= document.createElement("div");
            divs.classList="sketchDivs";
            divs.style.setProperty('height',`calc(100%/${Size})`);
            divs.style.setProperty('width',`calc(100%/${Size})`);
            fragment.appendChild(divs);
        };

          //Normal color
    container.addEventListener('mouseover', (event) => {
        if(event.target.classList.contains("sketchDivs")){
            event.target.style.backgroundColor="black";
        }
    });

    //Normal Color button
    normalColorButton.addEventListener("click", () =>{
        container.addEventListener('mouseover', (event) => {
            if(event.target.classList.contains("sketchDivs")){
                event.target.style.backgroundColor="black";
            }
            });
    })

    //RGB option
    rgbButton.addEventListener("click", () =>{
        container.addEventListener('mouseover', (event) => {
            if(event.target.classList.contains("sketchDivs")){
                event.target.style.backgroundColor=`rgb(${randomRGBColors()},${randomRGBColors()},${randomRGBColors()})`;
            }
             });
    });

    //Eraser
    eraserButton.addEventListener("click", () =>{
        container.addEventListener("mouseover", (event) =>{
            if(event.target.classList.contains("sketchDivs")){
                event.target.style.backgroundColor="white";
            }
        });
    });

    //Clear the divs
    clearButton.addEventListener("click", () =>{
        const divs = document.querySelectorAll('.sketchDivs');
        divs.forEach((div) => {
            div.style.backgroundColor = 'white'; 
        });
    });

container.appendChild(fragment);
}

function deleteDivs(){
    container.replaceChildren();
};
function randomRGBColors(){
    let randomColor= Math.round(Math.random()*255);
    return randomColor;
};


