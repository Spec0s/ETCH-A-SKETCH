
//                      Variables                           //
var x = 256;
var squareOpacity = 0;
//                  increment opacity                       //



//                  Reset button + add grid number          //

var gridReset = document.querySelector(".grid-reset")
gridReset.addEventListener('click', function () {
    removeAllChildNodes(mainGrid);

    let grid = prompt("Enter grid number");
    x = Math.pow(grid, 2);
    let boxSize = (500 / grid) + "px";

    var squareNaming = []

    for (var i = 1; i <= x; i++) {
        squareNaming.push("square" + i)
    }

    squareNaming.forEach(function (el) {
        el = document.createElement("div");
        el.style.flexBasis += boxSize;
        el.style.opacity += "0";
        mainGrid.appendChild(el);
    });

    var class1 = document.querySelectorAll(".main-grid>div");


    class1.forEach(className => className.addEventListener("mouseover", function (e) {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        e.target.style.backgroundColor = "#" + randomColor;
        e.target.style.opacity = Number(e.target.style.opacity) + 0.1;
    }));
})


//                  Create squares                       //
var squareNaming = []
var mainGrid = document.querySelector(".main-grid");
for (var i = 1; i <= x; i++) {
    squareNaming.push("square" + i)
}

squareNaming.forEach(function (el) {
    el = document.createElement("div");
    el.style.flexBasis += "31.25px";
    el.style.opacity = squareOpacity;
    mainGrid.appendChild(el);
});


//                      Change color on mouse over              //

var className = document.querySelectorAll(".main-grid>div");
className.forEach(className => className.addEventListener("mouseover", function (e) {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.backgroundColor = "#" + randomColor;
    e.target.style.opacity = Number(e.target.style.opacity) + 0.1;
}));


//                      Removes all squares function                //
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}













