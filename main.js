'use strict';

var toggleTheme = function (isOn) {
  var 
    body = document.getElementsByTagName('body').item(0),
    a = document.getElementsByTagName('a'),
    colors = {
      ivory: '#f5f5f5',
      ebony: '#1f1f1f',
      lavender: '#aaf',
      violet: '#50a'
    };

  if(!isOn) { 
    body.style.setProperty('color', `${colors['ebony']}`);
    body.style.setProperty('background-color', `${colors['ivory']}`);

    for (let i = 0; i < a.length; i++)
      a.item(i).style.setProperty('color', `${colors['violet']}`);
  } else { 
    body.style.setProperty('color', `${colors['ivory']}`);
    body.style.setProperty('background-color', `${colors['ebony']}`);

    for (let i = 0; i < a.length; i++)
      a.item(i).style.setProperty('color', `${colors['lavender']}`);
  }
};

var togglePower = function () {
  var isOn = document.getElementById('power').textContent === '🌙';

  document.getElementById('power').textContent = isOn ? '💡' : '🌙';
  isON = !isOn;
  toggleTheme(isOn) 
};

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
