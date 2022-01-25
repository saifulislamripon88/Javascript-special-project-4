const countDown = () => {
    const countDate = new Date("April 01, 2022 00:00:00").getTime();

    const now = new Date().getTime();

    const gap = countDate - now ;
    
    // how the fuck does time work?

    const second = 1000;
    const minute = second * 60;
    const hours  = minute * 60;
    const day = hours * 24;

    // calculate the shit

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hours);
    const textMinute = Math.floor((gap % hours)/ minute);
    const textSecond = Math.floor((gap % minute) / second)
   

//result show part 

document.querySelector(".day").innerHTML = textDay;
document.querySelector(".hour").innerHTML = textHour;
document.querySelector(".minute").innerHTML = textMinute;
document.querySelector(".second").innerHTML = textSecond;

//bottom console only used for  checking 
console.log(gap)

}

setInterval(countDown,1000);

countDown();

