function calculateTimeUntilJune7() {
 
    var currentDate = new Date();
    var targetDate = new Date("2025-06-07T14:30:00");
    var differenceMs = targetDate - currentDate;

    var days = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
    var hours = Math.floor((differenceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((differenceMs % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((differenceMs % (1000 * 60)) / 1000);

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

function updateCountdown() {
    var timeUntilJune7 = calculateTimeUntilJune7();
    var countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = "" +
        timeUntilJune7.days + " dager, " +
        timeUntilJune7.hours + " timer, " +
        timeUntilJune7.minutes + " minutter, "  +
        timeUntilJune7.seconds + " sekunder";
}

updateCountdown();

setInterval(updateCountdown, 1000);


window.addEventListener('resize', function() {
    document.documentElement.style.overflowX = 'hidden';
  });
