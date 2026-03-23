/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("convert-btn");
const inputEl = document.getElementById("input-value"); 

const lengthEl = document.getElementById("length-result"); 
const volumeEl = document.getElementById("volume-result"); 
const massEl = document.getElementById("mass-result"); 

convertBtn.addEventListener("click", function () {
    let baseValue = inputEl.value;
    // --- LENGTH MATH ---
    // Multiply for meters-to-feet,divide for feet-to-meter
    let lengthResult1 = (baseValue * 3.281).toFixed(3);
    let lengthResult2 = (baseValue / 3.281).toFixed(3);
    
    lengthEl.textContent = `${baseValue} meter = ${lengthResult1} feet | ${baseValue} feet = ${lengthResult2} meters`;  
    
    // --- VOLUME MATH ---
    // Multiply for liters-to-gallons, divide for gallons-to-liters
    let volResult1 = (baseValue * 0.264).toFixed(3);
    let volResult2 = (baseValue / 0.264).toFixed(3);

    volumeEl.textContent = `${baseValue} liter = ${volResult1} gallon | ${baseValue} gallon = ${volResult2} liter`;

    // --- MASS MATH ---
    // Multiply for kilos-to-pounds, divide for pounds-to-kilos
    let massResult1 = (baseValue * 2.204).toFixed(3);
    let massResult2 = (baseValue / 2.204).toFixed(3);

    massEl.textContent = `${baseValue} kilo = ${massResult1} pound | ${baseValue} pound = ${massResult2} kilo`;
})