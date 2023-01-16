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
    ["Renée","Marie-Dominique","Lindsey","Yasmine","Daniela","Mælys","Fatim","Gnélé","Samira","Marie-Pierre","Keren","Colombe","Zeinab","Aude","Emmanuella","Anna","Maurelle","Carine","Christelle","Loreen","Pascale","Marie-Emmanuelle","Indira","Chinan","Ashley","Marie-Victoire","Kimberly","Emmanuelle","Léa","Axelle","Astride","Laurine","Priscille","Læticia","Cindy","Mounira","Emmanuella","Andréa","Nanda","Sarata","Laureen","Grâce","Océane","Lauryn","Marie-Dominique","Makany","Alexandra","Carole","Leila","Et à toutes celles qu'on a aimé mais dont le nom nous échappe...","Compte à rebours lancé", "Esprits-Frères", "El Sueño", "Charles Henry", "14 Février"],
    0,
    0
  );
  loop();
}

function mainAndCount2() {
  typeWriterListe(
    "available",
    ["Esprits-Frères", "Disponible", "El Sueño", "Charles Henry"],
    0,
    0
  );
  loop();
}

function mainPraises() {
  loop();
}

function mainCountdown() {}

function index() {
  const element = document.getElementById("comingsoon");
  if (element.id == "available") {
    mainAndCount2();
  } else if (element.id == "comingsoon") {
  }{
    mainAndCount();
  }
}
