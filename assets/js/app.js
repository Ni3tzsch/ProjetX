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
      "l'Amour ",
      "l'Indifférence",
      "la Joie",
      "la Tristesse",
      "le Bonheur",
      "la Solitude",
      "les Rires",
      "les Pleures",
      "les Réflexions",
      "les Décisions",
      "les Discussions",
      "les Divisions",
      "les Regrets",
      "les Regrets",
      "Âmes-Soeurs",
      "Esprits-Frères",
    ],
    0,
    0
  );
  loop();
  setTimeout(function () {
    fade("nxt");
  }, 1500);
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
      "Compte à rebours lancé",
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
      " Le 14 est maintenant passé, <br> merci d'avoir écouter Esprits-Frères. L'objectif premier de ce projet était de montrer notre vision actuelle de l'amour qui est en 2023 purement Toxic. <br> Mais il est possible de se défaire de cette toxicité par la vérité, par la transparence et surtout par l'esprit. <br> Le but ayant été atteint, c'est maintenant à votre tour d'entrer en jeu, d'aller rechercher votre esprit-frère mais avant tout d'aimer correctement. <br> <br> Charles Henry & El Sueño. <br><br>";
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
