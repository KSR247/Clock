const secondHand = document.querySelector('.sec_hand');
const minsHand = document.querySelector('.min_hand');
const hourHand = document.querySelector('.hour_hand');
  
  function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setDate();
  setInterval(setDate, 1000);

  let digitalTime = document.getElementById('digital');

  function digital() {
    const time = new Date();
    const seconds = time.getSeconds();
    const mins = time.getMinutes();
    const hour = time.getHours() % 12;
    const ampm = hour >= 12 ? 'AM' : 'PM';
    digitalTime.textContent = `${hour}:${mins}:${seconds} ${ampm}`;

  }

  digital();
  setInterval(digital, 1000);
  
  