const container= document.querySelector("#container");
const containerHeader= document.querySelector("#header");

const askingButton= document.createElement("button");
askingButton.classList="askingButton";
askingButton.textContent="Press me";
containerHeader.appendChild(askingButton);

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
  
})

function divsSize(Size){
        for(let i=0;i<Size * Size;i++){
            console.log("ROw "+ i);
            let divs= document.createElement("div");
            divs.classList="sketchDivs";
            divs.style.setProperty('height',`calc(100%/${Size})`);
            divs.style.setProperty('width',`calc(100%/${Size})`);
            container.appendChild(divs);
            divs.addEventListener('mouseover', () => {
                divs.style.backgroundColor="blue";
            });
        }
}

function deleteDivs(){
    for(let i=0;i<userInput* userInput;i++){
        container.textContent='';
    }
};

