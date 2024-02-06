// ramdom color
const ramdomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  let intervalId;
  const startChanging = function () {  
    if (!intervalId) {
    intervalId = setInterval(changeColor, 1000);
  }
  
    function changeColor() {
      document.body.style.backgroundColor = ramdomColor();
    }
  };
  
  const stopChanging = function () {
    // clearInterval(intervalId);
    clearInterval(intervalId);
    intervalId = null;
  };
  document.querySelector('#start').addEventListener('click', startChanging);
  
  document.querySelector('#stop').addEventListener('click', stopChanging);
  