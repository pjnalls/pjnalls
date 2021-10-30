"use strict";

const fontSizeElements = [
  document.getElementsByTagName("h1"),
  document.getElementsByTagName("h2"),
  document.getElementsByTagName("h3"),
  document.getElementsByTagName("h4"),
  document.getElementsByTagName("p"),
];

for (let i = 0; i < fontSizeElements.length; i++) {
  for (let j = 0; j < fontSizeElements[i].length; j++)
    fontSizeElements[i].item(j).classList = fontSizeElements[i]
      .item(j)
      .tagName.toLowerCase();
}

const selectFontSize = function (element, fontOption) {
  let options = document.getElementsByClassName("size-option"),
    size = "";

  if (fontOption === -1) size = "sm";
  else if (fontOption === 1) size = "lg";
  else size = "";

  fontSizeElements.forEach((e) => {
    for (let i = 0; i < e.length; i++) {
      if (e.item(i).classList.value.includes("-"))
        e.item(i).classList = e.item(i).classList.value.split("-")[1];
      if (e.item(i)) {
        e.item(i).classList = `${size}${size.length > 0 ? "-" : ""}${
          e.item(i).classList
        }`;
      }
    }
  });
  for (let i = 0; i < options.length; i++) {
    options.item(i).classList.value = "size-option size-option-on";
  }

  element.classList.value += " selected-on";
};

const selectQualityLevel = function (element) {
  var options = document.getElementsByClassName("quality-option");

  for (let i = 0; i < options.length; i++)
    isOn
      ? (options.item(i).classList.value = "quality-option quality-option-on")
      : (options.item(i).classList.value = "quality-option quality-option-off");

  element.classList.value += isOn ? ` selected-on` : ` selected-off`;
};
