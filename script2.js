function updateWebTimer() {
  const clockElement = document.getElementById('clock');
  const now = new Date();
  
  // Formats time to HH:MM (e.g., "02:27 PM")
 
 const timeString = now.toLocaleTimeString();

// const timeString = now.toLocaleTimeString([], { 
//    hour: '2-digit', 
//    minute: '2-digit' 
//  });

  // Inject the time into the DOM element
  clockElement.textContent = timeString;
}

// Run immediately to avoid a blank screen on load
updateWebTimer();

// Calculate milliseconds remaining until the exact next minute mark
// This ensures the clock flips perfectly when the system minute changes
const currentSeconds = new Date().getSeconds();
const delayToNextMinute = (60 - currentSeconds) * 1000;

setTimeout(() => {
  // Sync the first update on the exact minute mark
  updateWebTimer();
  
  // Set the interval to loop every 60,000 milliseconds (1 minute) from then on
  setInterval(updateWebTimer, 500);
}, delayToNextMinute);
