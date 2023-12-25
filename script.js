function setClock() {
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');
  
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const hourDegree = (hours % 12) * 30 + (minutes / 60) * 30;
    const minuteDegree = minutes * 6 + (seconds / 60) * 6;
    const secondDegree = seconds * 6;
  
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
  }
  
  setInterval(setClock, 1000);
  setClock();
  
  
  