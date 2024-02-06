const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')
setInterval(function () {
  let date = new Date();
  // console.log(date.toDateString())
  clock.innerHTML = date.toLocaleDateString();
}, 1000);
