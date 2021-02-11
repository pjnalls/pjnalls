'use strict';

var 
  isOn = document.getElementById('power').textContent === '🌙',
  fontOption = 0;

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

var selectFontSize = function (element, offset) {
  /*
    h1 { font-size: 36px; 
      padding-top: 15px; }
    h2 { font-size: 24px; }
    h3, .lang-headers { font-size: 13px; }
    .check-it { font-size: 54px; }
    .power { font-size: 24px; }
    .lang { width: 100%; }
    .description { font-size: 24px; }
  */

  var 
    options = document.getElementsByClassName('size-option'),
    h1 = document.getElementsByTagName('h1'),
    h2 = document.getElementsByTagName('h2'),
    h3 = document.getElementsByTagName('h3'),
    checkIt = document.getElementsByClassName('check-it'),
    power = document.getElementsByClassName('power'),
    lang = document.getElementsByClassName('lang'),
    description = document.getElementsByClassName('description'),
    change = 0;

  if (fontOption === -1) {
    if (offset === 0) change = 7.5, fontOption = 0;
    else if (offset === 1) change = 15, fontOption = 1;
  } 
  else if (fontOption === 1) {
    if (offset === 0) change = -7.5, fontOption = 0;
    else if (offset === 1) change = -15, fontOption = -1;
  } else if (fontOption === 0) {
    if (offset === 1) change = 7.5, fontOption = 1;
    else if (offset === -1) change = -7.5, fontOption = -1;
  }

  for (let i = 0; i < h1.length; i++) {
    let px = h1.item(i).style.fontSize.split('p')[0];
    h1.item(i).style.fontSize == `${px + change}px`;
  }
  for (let i = 0; i < h2.length; i++) {
    let px = h2.item(i).style.fontSize.split('p')[0];
    h2.item(i).style.fontSize == `${px + change}px`;
  }
  for (let i = 0; i < h3.length; i++) {
    let px = h3.item(i).style.fontSize.split('p')[0];
    h3.item(i).style.fontSize == `${px + change}px`;
  }
  for (let i = 0; i < checkIt.length; i++) {
    let px = checkIt.item(i).style.fontSize.split('p')[0];
    checkIt.item(i).style.fontSize == `${px + change}px`;
  }
  for (let i = 0; i < power.length; i++) {
    let px = power.item(i).style.fontSize.split('p')[0];
    power.item(i).style.fontSize == `${px + change}px`;
  }
  for (let i = 0; i < lang.length; i++) {
    let px = lang.item(i).style.fontSize.split('p')[0];
    lang.item(i).style.fontSize == `${px + change}px`;
  }
  for (let i = 0; i < description.length; i++) {
    let px = description.item(i).style.fontSize.split('p')[0];
    description.item(i).style.fontSize == `${px + change}px`;
  }

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