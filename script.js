function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let greeting;
    const originalHour = now.getHours(); // 24-hour format

    if (originalHour >= 5 && originalHour < 12) {
        greeting = "Good Morning!";
    } else if (originalHour >= 12 && originalHour < 18) {
        greeting = "Hi There!";
    } else if (originalHour >= 18 && originalHour < 21) {
        greeting = "Good Evening!";
    } else if (originalHour >= 21 && originalHour < 24) {
        greeting = "Good Night!";
    } else {
        greeting = "EY! It's late, go to bed!";
    }

    document.querySelector('.greeting').innerText = greeting;
    document.querySelector('.clock').innerText = hours + ':' + minutes + ' ' + ampm;
    document.querySelector('.date').innerText = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`;
}

setInterval(updateTime, 1000);
updateTime();
