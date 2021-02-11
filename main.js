'use strict';

var isOn = document.getElementById('power').textContent === '🌙';

var toggleTheme = function () {
  var 
    body = document.getElementsByTagName('body').item(0),
    a = document.getElementsByTagName('a'),
    button = document.getElementById('power'),
    footer = document.getElementsByTagName('footer').item(0),
    header = document.getElementsByTagName('header').item(0),
    sizeOptions = document.getElementsByClassName('size-option'), 
    qualityOptions = document.getElementsByClassName('quality-option'),
    colors = {
      beige: '#ffffe5',
      gold: '#ffd800',
      ebony: '#1f1f1f',
      lavender: '#aaf',
      violet: '#409'
    };

  if (document.getElementsByClassName(`selected-on`))
    var selectedOn = document.getElementsByClassName(`selected-on`);
  else if (document.getElementsByClassName(`selected-off`))
    var selectedOff = document.getElementsByClassName(`selected-off`);

  if (!isOn) { 
    body.style.setProperty('color', `${colors['beige']}`);
    body.style.setProperty('background-color', `${colors['ebony']}`);
    footer.style.setProperty('background-color', `${colors['ebony']}`);
    header.style.setProperty('background-color', `${colors['ebony']}`);
    button.style.setProperty('background-color', `#000`);

    
    for (let i = 0; i < sizeOptions.length; i++)
      sizeOptions.item(i).classList.value === 'size-option size-option-on selected-on' ?
        sizeOptions.item(i).classList.value = 'size-option size-option-off selected-off' : 
        sizeOptions.item(i).classList.value = 'size-option size-option-off';

    for (let i = 0; i < qualityOptions.length; i++)
      qualityOptions.item(i).classList.value === 'quality-option quality-option-on selected-on' ?
        qualityOptions.item(i).classList.value = 'quality-option quality-option-off selected-off' :
        qualityOptions.item(i).classList.value = 'quality-option quality-option-off';

    for (let i = 0; i < a.length; i++)
      a.item(i).style.setProperty('color', `${colors['lavender']}`);
  } else { 
    body.style.setProperty('color', `${colors['ebony']}`);
    body.style.setProperty('background-color', `${colors['gold']}`);
    footer.style.setProperty('background-color', `${colors['gold']}`);
    header.style.setProperty('background-color', `${colors['gold']}`);
    button.style.setProperty('background-color', `${colors['ebony']}`);

    for (let i = 0; i < sizeOptions.length; i++)
      sizeOptions.item(i).classList.value === 'size-option size-option-off selected-off' ?
        sizeOptions.item(i).classList.value = 'size-option size-option-on selected-on' : 
        sizeOptions.item(i).classList.value = 'size-option size-option-on';

    for (let i = 0; i < qualityOptions.length; i++)
      qualityOptions.item(i).classList.value === 'quality-option quality-option-off selected-off' ?
        qualityOptions.item(i).classList.value = 'quality-option quality-option-on selected-on' :
        qualityOptions.item(i).classList.value = 'quality-option quality-option-on';
    
    for (let i = 0; i < a.length; i++)
      a.item(i).style.setProperty('color', `${colors['violet']}`);
  }
};

var togglePower = function () {
  document.getElementById('power').textContent = isOn ? '💡' : '🌙';
  isOn = !isOn;
  toggleTheme(); 
};

var selectFontSize = function (element) {
  var options = document.getElementsByClassName('size-option');

  for (let i = 0; i < options.length; i++)
    isOn ? 
      options.item(i).classList.value = 'size-option size-option-on' :
      options.item(i).classList.value = 'size-option size-option-off';

  element.classList.value += isOn ? ` selected-on` : ` selected-off`;
}

var selectQualityLevel = function (element) {
  var options = document.getElementsByClassName('quality-option');

  for (let i = 0; i < options.length; i++)
    isOn ?
      options.item(i).classList.value = 'quality-option quality-option-on' :
      options.item(i).classList.value = 'quality-option quality-option-off';
  
  element.classList.value += isOn ? ` selected-on` : ` selected-off`;
}