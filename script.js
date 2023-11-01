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

    document.querySelector('.clock').innerText = hours + ':' + minutes + ' ' + ampm;
    // Removed the year from the date display
    document.querySelector('.date').innerText = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`;
}

setInterval(updateTime, 1000);
updateTime();
