"use strict";

var isOn = document.getElementById("power").textContent === "🌙",
  fontSizeElements = [
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

var toggleTheme = function () {
  var body = document.getElementsByTagName("body").item(0),
    a = document.getElementsByTagName("a"),
    button = document.getElementById("power"),
    footer = document.getElementsByTagName("footer").item(0),
    header = document.getElementsByTagName("header").item(0),
    sizeOptions = document.getElementsByClassName("size-option"),
    qualityOptions = document.getElementsByClassName("quality-option"),
    colors = {
      beige: "#ffffe5",
      gold: "#ffe877",
      ebony: "#1f1f1f",
      lavender: "#cfcfff",
      violet: "#307",
      darkViolet: "#0c208c",
    };

  if (!isOn) {
    body.style.setProperty("color", `${colors["beige"]}`);
    body.style.setProperty("background-color", `${colors["darkViolet"]}`);
    footer.style.setProperty("background-color", `${colors["darkViolet"]}`);
    header.style.setProperty("background-color", `${colors["darkViolet"]}`);
    button.style.setProperty("background-color", `#fff`);

    for (let i = 0; i < sizeOptions.length; i++)
      sizeOptions.item(i).classList.value ===
      "size-option size-option-on selected-on"
        ? (sizeOptions.item(i).classList.value =
            "size-option size-option-off selected-off")
        : (sizeOptions.item(i).classList.value = "size-option size-option-off");

    for (let i = 0; i < qualityOptions.length; i++)
      qualityOptions.item(i).classList.value ===
      "quality-option quality-option-on selected-on"
        ? (qualityOptions.item(i).classList.value =
            "quality-option quality-option-off selected-off")
        : (qualityOptions.item(i).classList.value =
            "quality-option quality-option-off");

    for (let i = 0; i < a.length; i++)
      a.item(i).style.setProperty("color", `${colors["lavender"]}`);
  } else {
    body.style.setProperty("color", `${colors["darkViolet"]}`);
    body.style.setProperty("background-color", `${colors["gold"]}`);
    footer.style.setProperty("background-color", `${colors["gold"]}`);
    header.style.setProperty("background-color", `${colors["gold"]}`);
    button.style.setProperty("background-color", `${colors["darkViolet"]}`);

    for (let i = 0; i < sizeOptions.length; i++)
      sizeOptions.item(i).classList.value ===
      "size-option size-option-off selected-off"
        ? (sizeOptions.item(i).classList.value =
            "size-option size-option-on selected-on")
        : (sizeOptions.item(i).classList.value = "size-option size-option-on");

    for (let i = 0; i < qualityOptions.length; i++)
      qualityOptions.item(i).classList.value ===
      "quality-option quality-option-off selected-off"
        ? (qualityOptions.item(i).classList.value =
            "quality-option quality-option-on selected-on")
        : (qualityOptions.item(i).classList.value =
            "quality-option quality-option-on");

    for (let i = 0; i < a.length; i++)
      a.item(i).style.setProperty("color", `${colors["violet"]}`);
  }
};

var togglePower = function () {
  document.getElementById("power").textContent = isOn ? "💡" : "🌙";
  isOn = !isOn;
  toggleTheme();
};

var selectFontSize = function (element, fontOption) {
  var options = document.getElementsByClassName("size-option"),
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

  for (let i = 0; i < options.length; i++)
    isOn
      ? (options.item(i).classList.value = "size-option size-option-on")
      : (options.item(i).classList.value = "size-option size-option-off");

  element.classList.value += isOn ? ` selected-on` : ` selected-off`;
};

var selectQualityLevel = function (element) {
  var options = document.getElementsByClassName("quality-option");

  for (let i = 0; i < options.length; i++)
    isOn
      ? (options.item(i).classList.value = "quality-option quality-option-on")
      : (options.item(i).classList.value = "quality-option quality-option-off");

  element.classList.value += isOn ? ` selected-on` : ` selected-off`;
};
