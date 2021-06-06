const userInput = document.querySelector("#user-input-container")
const colorBtn = document.querySelectorAll(".color-button-sec button");
const fontIncreaseBtn = document.querySelector('.size-button-sec button:nth-child(1)')
const fontDecreaseBtn = document.querySelector('.size-button-sec button:nth-child(2)')
const textOutput = document.querySelector(".output-text");
const headingBtn = document.querySelectorAll(".heading-button-sec button");
let newHeading = document.createElement("p");   // Defining a heading to show all heading in same places.


colorBtn.forEach(element => {
    element.addEventListener('click', () => {
        let changeColor = (element.innerHTML).toLowerCase();
        userInput.style.color = changeColor;
    })
});
fontIncreaseBtn.addEventListener('click', () => {
    let initialFontSize = parseInt(window.getComputedStyle(userInput).fontSize);
    initialFontSize += 2;
    userInput.style.fontSize = `${initialFontSize}px`;
})
fontDecreaseBtn.addEventListener('click', () => {
    let initialFontSize = parseInt(window.getComputedStyle(userInput).fontSize);
    initialFontSize -= 2;
    userInput.style.fontSize = `${initialFontSize}px`;
})


//TODO: An usual way to do it.

// headingBtn.forEach(element => {
//     element.addEventListener('click',()=>{
//     let desiredHeading=(element.innerHTML).toLowerCase();
//     desiredHeading=desiredHeading.replace('create ','');
//     const newHeading=document.createElement(`${desiredHeading}`);
//     let headingContent=userInput.value;
//     newHeading.append(headingContent);
//     document.body.append(newHeading);
//     })
// });

//TODO: Trying another way to do it.

headingBtn[0].addEventListener('click', () => {

    newHeading.replaceWith(textOutput);
    let desiredHeading = (headingBtn[0].innerHTML).toLowerCase();
    desiredHeading = desiredHeading.replace('create ', '');    // Removing unnecessory text
    newHeading = document.createElement(`${desiredHeading}`);  // Creating user specific heading
    let headingContent = userInput.value;
    newHeading.append(headingContent);     // Appending text here
    textOutput.replaceWith(newHeading);    // Replaing the textOutput with newHeading
})
headingBtn[1].addEventListener('click', () => {

    newHeading.replaceWith(textOutput);  // Again replacing newHeading with textOutput, so that replacing works after that too.
    let desiredHeading = (headingBtn[1].innerHTML).toLowerCase();
    desiredHeading = desiredHeading.replace('create ', '');
    newHeading = document.createElement(`${desiredHeading}`);
    let headingContent = userInput.value;
    newHeading.append(headingContent);
    textOutput.replaceWith(newHeading);
})
headingBtn[2].addEventListener('click', () => {

    newHeading.replaceWith(textOutput);
    let desiredHeading = (headingBtn[2].innerHTML).toLowerCase();
    desiredHeading = desiredHeading.replace('create ', '');
    newHeading = document.createElement(`${desiredHeading}`);
    let headingContent = userInput.value;
    newHeading.append(headingContent);
    textOutput.replaceWith(newHeading);
    
})
