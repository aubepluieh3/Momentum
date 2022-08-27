const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    clock.innerText =`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();//wevsite가 load 되자마자 실행
setInterval(getClock, 1000);//매초마다 getClock 실행
    
