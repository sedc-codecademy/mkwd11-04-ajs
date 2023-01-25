let changeColor = (element, color = "black") => element.style.color = color;
let changeTextSize = (element, textSize) => {
  if(textSize === ""){
    element.style.fontSize = "24px";
  } else {
    element.style.fontSize = textSize + "px";
  }
}

let btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click", ()=>{
  let inputTextSize = document.
  getElementsByTagName("input")[0].value;
  let inputColor = document.
  getElementsByTagName("input")[1].value;
  let header = document.getElementsByTagName("h1")[0];
  changeTextSize(header, inputTextSize);
  changeColor(header, inputColor);
})