'use strict';

var toggleTheme = function (isOn) {
  var 
    body = document.getElementsByTagName('body').item(0),
    a = document.getElementsByTagName('a'),
    button = document.getElementById('power'),
    footer = document.getElementsByTagName('footer').item(0),
    header = document.getElementsByTagName('header').item(0),
    colors = {
      beige: '#ffffe5',
      gold: '#ffd800',
      ebony: '#1f1f1f',
      lavender: '#aaf',
      violet: '#30f'
    };

  if(isOn) { 
    body.style.setProperty('color', `${colors['ebony']}`);
    body.style.setProperty('background-color', `${colors['gold']}`);
    footer.style.setProperty('background-color', `${colors['gold']}`);
    header.style.setProperty('background-color', `${colors['gold']}`);
    button.style.setProperty('background-color', `${colors['ebony']}`);
    
    for (let i = 0; i < a.length; i++)
      a.item(i).style.setProperty('color', `${colors['violet']}`);
  } else { 
    body.style.setProperty('color', `${colors['beige']}`);
    body.style.setProperty('background-color', `${colors['ebony']}`);
    footer.style.setProperty('background-color', `${colors['ebony']}`);
    header.style.setProperty('background-color', `${colors['ebony']}`);
    button.style.setProperty('background-color', `#000`);

    for (let i = 0; i < a.length; i++)
      a.item(i).style.setProperty('color', `${colors['lavender']}`);
  }
};

var togglePower = function () {
  var isOn = document.getElementById('power').textContent === '🌙';

  document.getElementById('power').textContent = isOn ? '💡' : '🌙';
  isOn = !isOn;
  toggleTheme(isOn) 
};

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
