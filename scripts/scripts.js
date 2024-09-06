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

const clearButton= document.createElement("button");
clearButton.classList="clearButton";
clearButton.textContent="Clear";
containerFooter.appendChild(clearButton);

divsSize(16);
let userInput;

askingButton.addEventListener("click", () =>{
     userInput= prompt("Put the size of the sketch board ");
     if(userInput<1 || userInput>100){
        alert("This number is not available, select only numbers between 1 and 100")
     }else{
        deleteDivs();
        divsSize(userInput);
     }
  
});

function divsSize(Size){
        for(let i=0;i<Size * Size;i++){
            let divs= document.createElement("div");
            divs.classList="sketchDivs";
            divs.style.setProperty('height',`calc(100%/${Size})`);
            divs.style.setProperty('width',`calc(100%/${Size})`);
            container.appendChild(divs);

            //Normal color
            divs.addEventListener('mouseover', () => {
            divs.style.setProperty('background-Color', 'black');
            });

            //Normal Color button
            normalColorButton.addEventListener("click", () =>{
                divs.addEventListener('mouseover', () => {
                    divs.style.setProperty('background-Color', 'black');
                    });
            })

            //RGB option
            rgbButton.addEventListener("click", () =>{
                rgbButton.style.setProperty('background-Color', 'white');
                divs.addEventListener('mouseover', () => {
                    divs.style.setProperty('background-Color',`rgb(${randomRGBColors()},${randomRGBColors()},${randomRGBColors()})`);
                     });
            });

            //Clear the divs
            clearButton.addEventListener("click", () =>{
                divs.style.setProperty('background-Color', 'white');
            });
        }
}



function deleteDivs(){
    for(let i=0;i<userInput* userInput;i++){
        container.textContent='';
    }
};
function randomRGBColors(){
    let randomColor= Math.round(Math.random()*255);
    return randomColor;
};


