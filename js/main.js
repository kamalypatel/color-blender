
//for box 1
let boxOne = document.getElementById('boxOne')

let boxOneColor = window.getComputedStyle(boxOne).backgroundColor

console.log(boxOneColor)

let rgbOne = boxOneColor.slice(4).slice(0,-1).replace(" ", "").replace(" ","").split(',')

for (let i = 0; i <= rgbOne.length -1; i++) {
    rgbOne[i] = Number(rgbOne[i])
}

console.log(rgbOne)

//for box 2
let boxTwo = document.getElementById('boxTwo')

let boxTwoColor = window.getComputedStyle(boxTwo).backgroundColor

console.log(boxTwoColor)

let rgbTwo = boxTwoColor.slice(4).slice(0,-1).replace(" ", "").replace(" ","").split(',')

for (let i = 0; i <= rgbTwo.length -1; i++) {
    rgbTwo[i] = Number(rgbTwo[i])
}

console.log(rgbTwo)

//for box 3
let rThree = rgbOne[0] + rgbTwo[0] - 255;

let gThree = rgbOne[1] + rgbTwo[1] - 255;

let bThree = rgbOne[2] + rgbTwo[2] - 255;

let rgbThree = `rgb(${rThree}, ${gThree}, ${bThree}`

document.getElementById('boxThree').style.backgroundColor = rgbThree

let vectorOne = [rgbOne[1]*0.5, rgbOne[0]*0.5, rgbOne[2]*0.5];
let vectorTwo = [rgbTwo[1]*0.5, rgbTwo[0]*0.5, rgbTwo[2]*0.5];

console.log(vectorOne)

let resultantVector = [vectorOne[0] + vectorTwo[0], vectorOne[1] + vectorTwo[1], vectorOne[2] + vectorTwo[2]]

let rgbThreeReal = `rgb(${resultantVector[1]}, ${resultantVector[0]}, ${resultantVector[2]})`

document.getElementById('boxThree').style.backgroundColor = rgbThreeReal