var i = 0;
  var txt ="WELCOME TO MY PROFILE PAGE I am Muhammed Malik, a new programmer and this is my first website. ";
  var speed = 60;
  window.onload = function typeWriter() {
    if (i < txt.length) {
      if (i >= 0 && i <= 9) {
        document.getElementById("demo").innerHTML +=
          "<span style='font-size: 50px;color: white'>" +
          txt.charAt(i) +
          "</span>";
        i++;
        setTimeout(typeWriter, speed);
      }
      else if (i >= 11 && i <= 25) {
        document.getElementById("demo").innerHTML +=
          "<span style='color: rgb(109, 87, 87);font-size: 52px;'>" +
          txt.charAt(i) +
          "</span>";
        i++;
        setTimeout(typeWriter, speed);
      } else {
        document.getElementById("demo").innerHTML += 
        "<span style='color: white;font-size: 39px;'>" +

        txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
  };