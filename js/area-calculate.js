function calculateTringleArea() {
    // get triangle base value
    const baseFiled = document.getElementById('triangle-base');
    const baseValueText = baseFiled.value;
    const base = parseFloat(baseValueText);
    console.log(base);

    // get triangle hight value
    const hightFiled = document.getElementById('triangle-hight');
    const hightValueText = hightFiled.value;
    const hight = parseFloat(hightValueText);
    console.log(hight);

    const area = 0.5 * base * hight;
    console.log(area);

    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}

// Rectangle Area
function calculateRatangleArea() {
    // get rectangle width
    const widthFiled = document.getElementById('rectangle-width');
    const widthValueText = widthFiled.value;
    const width = parseFloat(widthValueText);
    console.log(width);

    // get rectangle length
    const lengthFiled = document.getElementById('rectangle-length');
    const lengthValueText = lengthFiled.value;
    const length = parseFloat(lengthValueText);

    // calculate rectangle area
    const area = width * length;
    // set ratangle area
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;

}
// 

/* // use event handler or function
function calculateRatangleArea(widthId) {
    const inputFiled = document.getElementById(widthId);
    const inputValueText = inputFiled.value;
    const inputvalue = parseFloat(inputValueText);
    return inputvalue;
}
document.getElementById('btn-ratangle').addEventListener('click',function(){
    // get the ratangle width value
    const width = calculateRatangleArea('rectangle-width');
    // get the ratangle length value
    const length = calculateRatangleArea('rectangle-length');
    // calculate ratangle values
    const area = width * length;
    // set ratangle value
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
}); */
