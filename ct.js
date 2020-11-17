const date= prompt("enter the date for example 1 Jan 2021");

const daysEl=document.getElementById("days");
 const hoursEl=document.getElementById("hours");
 const minutesEl=document.getElementById("minutes");

 const secondsEl=document.getElementById("seconds");
function countdown(){
    const countDate =new Date(date);
    const current_date=new Date();
    if(countDate<current_date){
        alert("the date you are giving is  a past date");
        break;
    }
    else{
    const seconds=(countDate-current_date)/1000;
    const days=Math.floor(seconds/3600/24);
    const hours=Math.floor(seconds/3600)%24;
    const minutes=Math.floor(seconds/60)%60;
    const actual_seconds=Math.floor(seconds%60);
    daysEl.innerHTML=days;
    hoursEl.innerHTML=format_time(hours);
    minutesEl.innerHTML=format_time(minutes);

    secondsEl.innerHTML=format_time(actual_seconds);
    }

}
 function format_time(time){
     return time<10? '0'+time:time;

 }
countdown();
setInterval(countdown,1000);