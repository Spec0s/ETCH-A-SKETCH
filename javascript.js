var x = 256;


//                  Reset button + add grid number          //


var gridReset = document.querySelector(".grid-reset")
gridReset.addEventListener('click', function () {

    // let grid = prompt("Enter grid number");
    // x = Math.pow(grid, 2);
    className.forEach(className => className.removeAttribute("style"));
})

//                  Create squares                       //


var squareNaming = []
const mainGrid = document.querySelector(".main-grid");

for (var i = 1; i <= x; i++) {
    squareNaming.push("square" + i)
}

squareNaming.forEach(function (el) {
    el = document.createElement("div");
    el.className = "square-class";
    mainGrid.appendChild(el);
});



//                      Change color on mouse over              //
var className = document.querySelectorAll(".square-class");
className.forEach(className => className.addEventListener("mouseover", function (e) {
    e.target.style.cssText = "background-color: green;"
}));











