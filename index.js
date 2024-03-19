let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");
let background = document.getElementById('background')
const Func1 = () =>{
  let hexDigit = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * 16);
    color += hexDigit[randomNum];
  }
btn.innerHTML = color;
document.body.style.backgroundImage = `linear-gradient(to right,${color},rgb(64,234,033))`;
background.innerHTML = `background-image: linear-gradient(to right,${btn.innerHTML},${btn1.innerHTML})`

}

const Func2 = ()  => {
  let hexDigit = "abcdef0123456789";
  let color1 = "#";
  for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * 16);
    color1 += hexDigit[randomNum];
  }
  btn1.innerHTML = color1;
  document.body.style.backgroundImage = `linear-gradient(to left,${color1},rgb(15,344,093))`;
  background.innerHTML = `background-image: linear-gradient(to right,${btn.innerHTML},${btn1.innerHTML})`
}
background.addEventListener('click',()=>{
  navigator.clipboard.writeText(background.innerHTML)
  alert("Text Copied!")
})
btn.addEventListener("click", Func1);
btn1.addEventListener("click", Func2);
