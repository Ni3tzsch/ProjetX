var speed = 150; /* The speed/duration of the effect in milliseconds */
var a = true;

function typeWriterListe(elid, texts, index, step) {
  var text = texts[index];

  if (step == 0) document.getElementById(elid).innerHTML = text.charAt(0);

  if (step < text.length && a == true) {
    document.getElementById(elid).innerHTML += text.charAt(step + 1);
    step++;

    if (step == text.length) {
      a = false;
    }

    setTimeout(function () {
      typeWriterListe(elid, texts, index, step);
    }, speed);
  } else {
    document.getElementById(elid).innerHTML = document
      .getElementById(elid)
      .innerHTML.slice(0, -1);
    step--;

    if (step == 0) {
      a = true;
      index++;

      if (index == texts.length) index = 0;

      document.getElementById(elid).innerHTML = texts[index].charAt(0);
    }

    setTimeout(function () {
      typeWriterListe(elid, texts, index, step);
    }, speed);
  }
}

function typeWriterListeClass(elid, texts, index, step) {
  var text = texts[index];

  if (step == 0)
    document.getElementsByClassName(elid).innerHTML = text.charAt(0);

  if (step < text.length && a == true) {
    document.getElementsByClassName(elid).innerHTML += text.charAt(step + 1);
    step++;

    if (step == text.length) {
      a = false;
    }

    setTimeout(function () {
      typeWriterListe(elid, texts, index, step);
    }, speed);
  } else {
    document.getElementsByClassName(elid).innerHTML = document
      .getElementById(elid)
      .innerHTML.slice(0, -1);
    step--;

    if (step == 0) {
      a = true;
      index++;

      if (index == texts.length) index = 0;

      document.getElementsByClassName(elid).innerHTML = texts[index].charAt(0);
    }

    setTimeout(function () {
      typeWriterListe(elid, texts, index, step);
    }, speed);
  }
}

function typeWriterSimpleText(elid, text, step, _speed) {
  if (text.length == step && elid != "last") {
    document.getElementById("pn").style.display = "flex";
  }

  if (step == 0) document.getElementById(elid).innerHTML = "";

  if (step < text.length && a == true) {
    document.getElementById(elid).innerHTML += text.charAt(step);
    step++;

    setTimeout(function () {
      typeWriterSimpleText(elid, text, step, _speed);
    }, _speed);
    document.getElementById("pn").style.display = "none";
  }
}

function fade(elid) {
  element = document.getElementById(elid);
  element.style.display = "block";
  var op = 0.1; // initial opacity
  var timer = setInterval(function () {
    if (op >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op += op * 0.1;
  }, 50);
}

function main() {
  typeWriterListe(
    "msg",
    [
      "Portez vos écouteurs",
      "Videz votre esprit",
      "Soyez relax",
      "Âmes-Soeurs",
      "Esprits-Frères",
      "Allez-y",
    ],
    0,
    0
  );
  loop();
  setTimeout(function () {
    fade("nxt");
  }, 10000);
}

function mainAndCount() {
  typeWriterListe(
    "comingsoon",
    [
      "Renée",
      "Marie-Dominique",
      "Lindsey",
      "Yasmine",
      "Daniela",
      "Mælys",
      "Fatim",
      "Gnélé",
      "Samira",
      "Marie-Pierre",
      "Keren",
      "Colombe",
      "Zeinab",
      "Aude",
      "Emmanuella",
      "Maurelle",
      "Grâce-Océane",
      "Benny",
      "Carine",
      "Christelle",
      "Loreen",
      "Pascale",
      "Marie-Emmanuelle",
      "Kébolé",
      "Indira",
      "Chinan",
      "Ashley",
      "Joanna",
      "Marie-Victoire",
      "Anne-Doriane",
      "Kimberly",
      "Emmanuelle",
      "Laurianne",
      "Léa",
      "Axelle",
      "Astride",
      "Laurine",
      "Priscille",
      "Læticia",
      "Cindy",
      "Mounira",
      "Anne-Colombe",
      "Emmanuella",
      "Andréa",
      "Nanda",
      "Sarata",
      "Laureen",
      "Grâce",
      "Eunice",
      "Océane",
      "Lauryn",
      "Makany",
      "Alexandra",
      "Carole",
      "Leila",
      "Aïcha",
      "Grâce-Emmanuella",
      "Assita",
      "Patricia",
      "Et à toutes celles qu'on a aimé,",
      "mais dont le nom nous échappe...",
      "Il reste moins d'une journée",
      "Esprits-Frères",
      "El Sueño x Charles Henry",
      "14 Février",
    ],
    0,
    0
  );
  loop();
}

function mainPraises() {
  loop();
}

function mainCountdown() {}

var countDownDatex = new Date("Feb 15, 2023 00:00:00").getTime();
var countx = setInterval(function () {
  var nowx = new Date().getTime();
  var timeleftx = countDownDatex - nowx;
  if (timeleftx <= 0) {
    let date = new Date().toLocaleDateString("fr");
    document.getElementById("bouton").style.fontFamily = "caesarregular";
    document.getElementById("bouton").innerHTML =
      "Le 14 est maintenant passé,<br> merci d'avoir écouté Esprits-Frères. L'objectif premier de ce projet était de montrer notre vision actuelle de l'amour en 2023 qui est considérée comme purement toxique.<br> Mais il est possible de se débarrasser de cette toxicité en adoptant la vérité, la transparence et surtout l'esprit.<br> Le but ayant été atteint, c'est maintenant à votre tour de jouer, de chercher votre esprit-frère mais surtout d'aimer de manière appropriée.<br> <br>Charles Henry et El Sueño. <br><br>";
    document.getElementById("bouton").insertAdjacentHTML("beforeend", date);
    document.getElementById("bouton").style.textAlign = "center";
  } else {
    var hoursx = Math.floor(
      (timeleftx % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    hoursx = hoursx < 10 ? "0" + String(hoursx) : String(hoursx);
    var minutesx = Math.floor((timeleftx % (1000 * 60 * 60)) / (1000 * 60));
    minutesx = minutesx < 10 ? "0" + String(minutesx) : String(minutesx);
    var secondsx = Math.floor((timeleftx % (1000 * 60)) / 1000);
    secondsx = secondsx < 10 ? "0" + String(secondsx) : String(secondsx);

    document.getElementById("hoursx").innerHTML = hoursx;
    document.getElementById("minutesx").innerHTML = minutesx;
    document.getElementById("secondsx").innerHTML = secondsx;
    // document.getElementById("available").remove();
  }
}, 1000);
