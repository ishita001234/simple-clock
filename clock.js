function showTime()
{
    // Getting current time and date
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = "AM";

    // Setting time for 12-hour format
    if (hour >= 12) 
    {
        am_pm = "PM";
        if (hour > 12) hour -= 12;
    } 
    else if (hour == 0)
    {
        hour = 12;
    }

    // Formatting hours, minutes, and seconds
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    // Combining everything into a single string
    let currentTime = `${hour}:${min}:${sec} ${am_pm}`;

    // Displaying the time
    document.getElementById("clock").innerHTML = currentTime;
}

// Calling showTime function at every second
setInterval(showTime, 1000);

// Initial call to display time immediately
showTime();
