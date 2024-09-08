
function updateTime() {
    let clock = document.getElementById("clock")
    let now = new Date();
    let hours = now.getHours();
    let period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours.toString().padStart(2, 0);
    minutes = minutes.toString().padStart(2, 0);
    seconds = seconds.toString().padStart(2, 0);

    clock.textContent = `${hours}:${minutes}:${seconds} ${period}`;
}

setInterval(updateTime, 1000);