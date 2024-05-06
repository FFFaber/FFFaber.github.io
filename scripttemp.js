const inputBox = document.getElementById("inputBox")
const resultBox = document.getElementById("resultBox")
const unitCategory = document.getElementById("unitCategory")
const resultCategory = document.getElementById("resultCategory")
const borrarBtn = document.querySelector("button")

const convFactors = {
    "celsius": function(celsiusValue) {
        return {
            "celsius": celsiusValue,
            "fahren": celsiusValue * 9/5 + 32,
            "kelv": celsiusValue + 273.15,
            "rankine": celsiusValue * 9/5 + 491.67
        };
    },
    "fahren": function(fahrenValue) {
        return {
            "celsius": (fahrenValue - 32) * 5/9,
            "fahren": fahrenValue,
            "kelv": (fahrenValue - 32) * 5/9 + 273.15,
            "rankine": fahrenValue + 459.67
        };
    },
    "kelv": function(kelvValue) {
        return {
            "celsius": kelvValue - 273.15,
            "fahren": (kelvValue - 273.15) * 9/5 + 32,
            "kelv": kelvValue,
            "rankine": kelvValue * 9/5
        };
    },
    "rankine": function(rankineValue) {
        return {
            "celsius": (rankineValue - 491.67) * 5/9,
            "fahren": rankineValue - 459.67,
            "kelv": rankineValue * 5/9,
            "rankine": rankineValue
        };
    }
};

inputBox.addEventListener("input", updateResult)
unitCategory.addEventListener("change", updateResult)
resultCategory.addEventListener("change", updateResult)
borrarBtn.addEventListener("click", clearInput)

function updateResult(){
    const inputValue = parseFloat(inputBox.value);
    const inputCategoryVal = unitCategory.value;
    const resultCategoryVal = resultCategory.value;

    const convFactorFunc = convFactors[inputCategoryVal];
    const resultValues = convFactorFunc(inputValue);

    resultBox.value = isNaN(inputValue) ? "" : resultValues[resultCategoryVal];
}
function clearInput() {
    inputBox.value = "";
    resultBox.value = "";
}
function irLong(){
    window.location.href = "longitud.html"
}
function irVel(){
    window.location.href = "velocidad.html";
}
function irFuer(){
    window.location.href = "fuerza.html";
}
function irWork(){
    window.location.href = "trabajo.html";
}
function irMasa(){
    window.location.href = "masa.html";
}
function irTime(){
    window.location.href = "tiempo.html";
}
function irCarga(){
    window.location.href = "carga.html"
}
function irPoten(){
    window.location.href = "potencia.html"
}
function irDens(){
    window.location.href = "densidad.html"
}
function irDif(){
    window.location.href = "tension.html"
}
function irVol(){
    window.location.href = "volumen.html"
}
function irLong(){
    window.location.href = "longitud.html"
}