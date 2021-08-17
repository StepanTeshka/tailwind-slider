const whiteButton = document.querySelector("#whiteButton");
const darkButton = document.querySelector("#darkButton");
const body = document.querySelector("body");
const precent = document.querySelector("#myNumber");
const pPrecent = document.querySelector("#pPrecent");
whiteButton.addEventListener("click", handleClick);
darkButton.addEventListener("click", handleClick);
const waring = document.querySelector("#waring");
const waringBlock = document.querySelector("#waringBlock");
const distanceRange = document.querySelector("#distanceRange");
const darkwhite = document.querySelector("#dark-white");
const buttonSVGwhite = document.querySelector("#buttonSVGwhite");
const buttonSVGdark = document.querySelector("#buttonSVGdark");

const rangeInput = document.querySelector("#myRange");

rangeInput.addEventListener("input", handleChangeValue);
precent.addEventListener("input", handleChangeValue);

let cachedValue;

function handleChangeValue(evt) {
  const value = evt.target.value;

  if (value > 100 || value < 0) {
    precent.value = cachedValue;
    waringBlock.classList.remove("hidden");
    console.log("<100");
    return;
  } else [waringBlock.classList.add("hidden")];
  cachedValue = value;

  console.log("change");
  precent.value = value;
  rangeInput.value = value;

  var two = document.getElementById("2");
  var fhree = document.getElementById("3");
  var four = document.getElementById("4");
  var five = document.getElementById("5");

  if (value >= 25) {
    two.classList.add("bg-blue-600");
  } else {
    two.classList.remove("bg-blue-600");
  }
  if (value >= 50) {
    fhree.classList.add("bg-blue-600");
  } else {
    fhree.classList.remove("bg-blue-600");
  }
  if (value >= 75) {
    four.classList.add("bg-blue-600");
  } else {
    four.classList.remove("bg-blue-600");
  }
  if (value >= 100) {
    five.classList.add("bg-blue-600");
  } else {
    five.classList.remove("bg-blue-600");
  }

  distanceRange.style.width = `${value}%`;
}

function handleClick(evt) {
  const id = evt.target.id;
  console.log(evt, id);
  if (id === "whiteButton") {
    body.classList.remove("bg-current");
    whiteButton.classList.remove("bg-gray-400", "border-gray-400");
    buttonSVGwhite.classList.remove("bg-gray-400", "text-gray-50");
    buttonSVGwhite.classList.add("text-gray-900");
    darkwhite.classList.remove("bg-gray-400");
    darkButton.classList.remove("bg-current");
    buttonSVGdark.classList.add("text-gray-400");
    buttonSVGdark.classList.remove("text-gray-50");
    precent.classList.remove("text-gray-50", "bg-gray-900");
    pPrecent.classList.remove("text-gray-50");
    waring.classList.remove("text-gray-50");
  } else {
    body.classList.add("bg-current");
    whiteButton.classList.add("bg-gray-400", "border-gray-400");
    buttonSVGwhite.classList.remove("text-gray-900");
    buttonSVGwhite.classList.add("bg-gray-400", "text-gray-50");
    darkwhite.classList.add("bg-gray-400");
    darkButton.classList.add("bg-current");
    buttonSVGdark.classList.remove("text-gray-400");
    buttonSVGdark.classList.add("text-gray-50");
    precent.classList.add("text-gray-50", "bg-gray-900");
    pPrecent.classList.add("text-gray-50");
    waring.classList.add("text-gray-50");
  }
}
