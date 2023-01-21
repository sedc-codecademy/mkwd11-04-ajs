// First exercise

const nameListEl = document.querySelector(".name-list");
const nameBtn = document.querySelector(".name-btn");

const names = ["John", "Jane", "Amy", "Alex", "Marko"];

function renderNames(nameArr, listEl) {
  let htmlContent = "";

  for (let name of nameArr) {
    htmlContent += `<li>${name}</li>`;
  }

  listEl.innerHTML = htmlContent;
}

nameBtn.addEventListener("click", function () {
  renderNames(names, nameListEl);
});

// Second exercise

const colorInput = document.querySelector("#color");
const fontSizeInput = document.querySelector("#fontSize");
const itemsInput = document.querySelector("#items");
const generateBtn = document.querySelector(".generate-btn");
const listsContainerEl = document.querySelector(".lists-container");

function generateList(color, fontSize, items, containerEl) {
  let liHTML = "";
  for (let item of items) {
    liHTML += `<li>${item}</li>`;
  }

  let listHTML = `<ul style="color: ${color}; font-size: ${fontSize}px" >${liHTML}</ul>`;

  containerEl.innerHTML += listHTML;
}

generateBtn.addEventListener("click", function () {
  console.log(itemsInput.value);
  const items = itemsInput.value.split(",");

  console.log(items);

  generateList(colorInput.value, fontSizeInput.value, items, listsContainerEl);
});
