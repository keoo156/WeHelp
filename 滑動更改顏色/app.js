//dom宣告

let hexNum = document.querySelector(".hex_num");
let finalColor = document.querySelector(".hex_color");
let Sliders = document.querySelectorAll(".slider")
let red_number = document.querySelector(".red_number");
let green_number = document.querySelector(".green_number");
let blue_number = document.querySelector(".blue_number")

//掛監聽器

Sliders.forEach((slider)=>{
  slider.addEventListener("input", (e)=>{
    let arr = [];
    let newHex = ""
    for (let i = 1; i <4 ; i++){
      arr.push(e.target.parentElement.parentElement.children[i].children[0].valueAsNumber)
    }
    for (let j = 0; j < arr.length; j++){
      newHex += getNum(arr[j])
    }
    hexNum.innerHTML = `#${newHex}`
    finalColor.style.backgroundColor = hexNum.innerHTML
    red_number.innerHTML = arr[0]
    green_number.innerHTML = arr[1]
    blue_number.innerHTML = arr[2]
  })
})


//功能區
function getNum(num) {
  let result = "";
  for (let i = 0; i < 2; i++) {
    let restNum = num % 16;
    num = Math.floor(num / 16);
    result += convertor(restNum);
  }
  result = [...result].reverse().join("");
  return result;
}
const sixteen = { 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" };
function convertor(restNum) {
  if (restNum >= 10) {
    let symbol = sixteen[restNum];
    return symbol;
  } else if (restNum < 10) {
    return restNum;
  }
}
