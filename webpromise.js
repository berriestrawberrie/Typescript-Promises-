var _a;
var win = document.getElementById("win");
var lose = document.getElementById("lose");
var userReturn = document.getElementById("return");
(_a = document.getElementById("play")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var myPromise = new Promise(function (resolve, reject) {
        var result = Math.random();
        if (result > .5) {
            resolve("You Win!");
            win.style.display = "block";
            lose.style.display = "none";
        }
        else {
            reject("Game Over!");
            lose.style.display = "block";
            win.style.display = "none";
        }
    });
    myPromise
        //PROMISE SUCCESS
        .then(function (data) {
        console.log(data);
    })
        //PROMISE FAIL
        .catch(function (error) { return console.log(error); });
});
//PART 2
var fetchAdviceBy = function (id) {
    fetch("https://api.adviceslip.com/advice/".concat(id))
        .then(function (response) { return response.json(); })
        .then(function (data) {
        userReturn.innerText = data.slip.advice;
    })
        .catch(function (error) {
        console.error('Error fetching advice: ', error);
    });
};
