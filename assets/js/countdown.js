var countDownDate = new Date("Feb 14, 2023 00:00:00").getTime();

var count = setInterval(function () {
  var now = new Date().getTime();
  var timeleft = countDownDate - now;

  if (timeleft <= 0) {
    document.getElementById("times").remove();
    document.getElementById("comingsoon").remove();
    document.getElementById("andoscopie").remove();
    document.querySelector("iframe").remove();
    document.getElementById("soundiv").remove();
  } else {
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    days = days < 10 ? "0" + String(days) : String(days);
    var hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    hours = hours < 10 ? "0" + String(hours) : String(hours);
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    minutes = minutes < 10 ? "0" + String(minutes) : String(minutes);
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    seconds = seconds < 10 ? "0" + String(seconds) : String(seconds);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("available").style.display = "none";
    document.getElementById("available2").style.display = "none";
    document.getElementById("available3").style.display = "none";
    document.getElementById("available4").style.display = "none";
    // document.getElementById("available").remove();
  }
}, 1000);
