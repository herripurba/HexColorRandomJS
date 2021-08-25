const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
console.log("test");

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// btn.addEventListener("click", function() {
//     console.log("1");
// });
btn.addEventListener("click", function(){
    let hexColor="#";
    for(let i=0; i<6 ; i++){
        hexColor += hex[getRandomNumber()];
    }
    let y = getRandomNumber();
    // console.log(y);
    // console.log(hex.length);
    color.textContent = hexColor;
    document.body.style.backgroundColor=hexColor; 
});

function getRandomNumber(){
    var x;
    x = Math.floor(Math.random()*hex.length);
    return x;
}