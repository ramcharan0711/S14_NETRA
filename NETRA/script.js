function updateClock() {
    const clock = document.getElementById("clock");
    if (clock)
        clock.textContent = new Date().toLocaleTimeString();
}
// Run once now, then repeat every 1000 ms
updateClock();
setInterval(updateClock, 1000);
// part2 21_11_2026
