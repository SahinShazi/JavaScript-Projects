function runningTime() {
  const now = new Date();
  let hours = now.getHours().toString().padStart(2,'0');
  let minutes = now.getMinutes().toString().padStart(2,'0');
  let second = now.getSeconds().toString().padStart(2,'0');
  
  let timeString = `${hours}:${minutes}:${second}`
  
  document.getElementById('clock').innerText = timeString;
}

runningTime();
setInterval(runningTime);
