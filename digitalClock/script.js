// function update(){
// let timer = document.getElementById('timer');
// let date = new Date();

// let hour = date.getHours();
// if(hour < 10) hour = '0' + hour;
// timer.children[0].innerHTML = hour;


// let minutes = date.getMinutes();
// if(minutes < 10) minutes = '0' + minutes;
// timer.children[1].innerHTML = minutes;


// let seconds = date.getSeconds();
// if(seconds < 10) seconds = '0' + seconds;
// timer.children[2].innerHTML = seconds;
// }

// let timerId;
// function timerStart(){
// 	timerId = setInterval(update, 1000);
// 	update();
// }
// function timerStop(){
// 	clearInterval(timerId);
// 	timerId = null;
// }
// //timerStart();


let timerId;

    function update() {
      let clock = document.getElementById('clock');
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
      clock.children[0].innerHTML = hours;

      let minutes = date.getMinutes();
      if (minutes < 10) minutes = '0' + minutes;
      clock.children[1].innerHTML = minutes;

      let seconds = date.getSeconds();
      if (seconds < 10) seconds = '0' + seconds;
      clock.children[2].innerHTML = seconds;
    }

    function clockStart() {
      timerId = setInterval(update, 1000);
      update(); // <--  начать тут же, не ждать 1 секунду пока setInterval сработает
    }

    function clockStop() {
      clearInterval(timerId);
    }

    //clockStart();