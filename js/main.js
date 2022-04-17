//says the original purple default

document.getElementById('colorText').textContent = document.getElementById('boxFour').style.backgroundColor

//for box 1

function convertOne(boxOneColor) {
    let rgbOnet = boxOneColor.slice(4).slice(0,-1).replace(" ", "").replace(" ","").split(',')

    for (let i = 0; i <= rgbOnet.length -1; i++) {
        rgbOnet[i] = Number(rgbOnet[i])
    }

    console.log(rgbOnet)
    return rgbOnet
}

//for box 2

function convertTwo(boxTwoColor) {
    let rgbTwot = boxTwoColor.slice(4).slice(0,-1).replace(" ", "").replace(" ","").split(',')

    for (let i = 0; i <= rgbTwot.length -1; i++) {
        rgbTwot[i] = Number(rgbTwot[i])
    }

    console.log(rgbTwot)
    return rgbTwot
}
//for box 3

function getMixedColor (rgbOnet, rgbTwot) {
    let vectorOne = [rgbOnet[1]*0.5, rgbOnet[0]*0.5, rgbOnet[2]*0.5];
    let vectorTwo = [rgbTwot[1]*0.5, rgbTwot[0]*0.5, rgbTwot[2]*0.5];

    console.log(vectorOne)

    let resultantVector = [vectorOne[0] + vectorTwo[0], vectorOne[1] + vectorTwo[1], vectorOne[2] + vectorTwo[2]]

    let rgbThreeReal = `rgb(${resultantVector[1]}, ${resultantVector[0]}, ${resultantVector[2]})`

    console.log(rgbThreeReal)
    return rgbThreeReal
}


//implemented color pickers


let pickerOne = document.getElementById('boxOne')
let pickerTwo = document.getElementById('boxTwo')

pickerOne.addEventListener("change", watchColorPickerOne, false);
pickerTwo.addEventListener("change", watchColorPickerTwo, false);

//converting hexcodes to rbg. Adding colors is only possible in rbg/cymk
function hexToRGB(h) {
    let r = 0, g = 0, b = 0;
  
    // 3 digits
    if (h.length == 4) {
      r = "0x" + h[1] + h[1];
      g = "0x" + h[2] + h[2];
      b = "0x" + h[3] + h[3];
  
    // 6 digits
    } else if (h.length == 7) {
      r = "0x" + h[1] + h[2];
      g = "0x" + h[3] + h[4];
      b = "0x" + h[5] + h[6];
    }
    
    return "rgb("+ +r + "," + +g + "," + +b + ")";
}


//listening for color picker one
function watchColorPickerOne(event) {
    let rgbOne = hexToRGB(event.target.value)
    let rgbTwo = hexToRGB(document.getElementById('boxTwo').value)
    console.log(rgbOne)

    document.getElementById('boxFour').style.backgroundColor = getMixedColor(convertOne(rgbOne), convertTwo(rgbTwo))

    document.getElementById('colorText').textContent = document.getElementById('boxFour').style.backgroundColor
}

//listening for color picker two
function watchColorPickerTwo(event) {
    let rgbOne = hexToRGB(document.getElementById('boxOne').value)
    let rgbTwo = hexToRGB(event.target.value)
    console.log(rgbTwo)

    document.getElementById('boxFour').style.backgroundColor = getMixedColor(convertOne(rgbOne), convertTwo(rgbTwo))

    document.getElementById('colorText').textContent = document.getElementById('boxFour').style.backgroundColor
}