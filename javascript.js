//                  Create squares                       //
const mainGrid = document.querySelector(".main-grid");


var squareNaming = []

for (var i = 1; i <= 256; i++) {
    squareNaming.push("square" + i)
}

squareNaming.forEach(function (el) {
    el = document.createElement("div");
    mainGrid.appendChild(el);
});



//                      Change color on mouse over              //
var className=document.querySelector(".square-class");
mainGrid.addEventListener("mouseover",function(e){
    e.target.classList.add("change-color");
});







