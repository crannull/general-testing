function updateWebTimer() {
  const clockElement = document.getElementById('clock');
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  clockElement.textContent = timeString;
}
setInterval(updateWebTimer, 500);