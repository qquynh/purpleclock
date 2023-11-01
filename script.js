function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const timeString = `${hours}:${minutes} ${ampm}`;

    const day = now.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    const greeting = getGreeting(now.getHours());
    
    document.getElementById('greeting').innerText = greeting;
    document.getElementById('clock').innerText = timeString;
    document.getElementById('date').innerText = day;
}

function getGreeting(hour) {
    if (hour < 12) {
        return "Good Morning";
    } else if (hour < 18) {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    }
}

setInterval(updateClock, 1000);
updateClock();
