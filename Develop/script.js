var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

var currentHour = moment().format("HH");

var saveBtn09 = document.getElementById("save09");
var saveBtn10 = document.getElementById("save10");
var saveBtn11 = document.getElementById("save11");
var saveBtn12 = document.getElementById("save12");
var saveBtn01 = document.getElementById("save01");
var saveBtn02 = document.getElementById("save02");
var saveBtn03 = document.getElementById("save03");
var saveBtn04 = document.getElementById("save04");
var saveBtn05 = document.getElementById("save05");

var nineAM = document.getElementById("nineAM");
var tenAM = document.getElementById("tenAM");
var elevenAM = document.getElementById("elevenAM");
var twelvePM = document.getElementById("twelvePM");
var onePM = document.getElementById("onePM");
var twoPM = document.getElementById("twoPM");
var threePM = document.getElementById("threePM");
var fourPM = document.getElementById("fourPM");
var fivePM = document.getElementById("fivePM");

if (currentHour < 09) {
  document.getElementById("hour-9").classList.add("future");
} else if (currentHour == 09) {
  document.getElementById("hour-9").classList.remove("future");
  document.getElementById("hour-9").classList.add("present");
} else {
  document.getElementById("hour-9").classList.remove("present");
  document.getElementById("hour-9").classList.add("past");
}

saveBtn09.addEventListener("click", function (event) {
  event.preventDefault();

  saved09AM = {
    nineAM: nineAM.value,
  };

  localStorage.setItem("saved09AM", JSON.stringify(saved09AM));
});

if (currentHour < 10) {
  document.getElementById("hour-10").classList.add("future");
} else if (currentHour == 10) {
  document.getElementById("hour-10").classList.remove("future");
  document.getElementById("hour-10").classList.add("present");
} else {
  document.getElementById("hour-10").classList.remove("present");
  document.getElementById("hour-10").classList.add("past");
}

saveBtn10.addEventListener("click", function (event) {
  event.preventDefault();

  saved10AM = {
    tenAM: tenAM.value,
  };

  localStorage.setItem("saved10AM", JSON.stringify(saved10AM));
});

if (currentHour < 11) {
  document.getElementById("hour-11").classList.add("future");
} else if (currentHour == 11) {
  document.getElementById("hour-11").classList.remove("future");
  document.getElementById("hour-11").classList.add("present");
} else {
  document.getElementById("hour-11").classList.remove("present");
  document.getElementById("hour-11").classList.add("past");
}

saveBtn11.addEventListener("click", function (event) {
  event.preventDefault();

  saved11AM = {
    elevenAM: elevenAM.value,
  };

  localStorage.setItem("saved11AM", JSON.stringify(saved11AM));
});

if (currentHour < 12) {
  document.getElementById("hour-12").classList.add("future");
} else if (currentHour == 12) {
  document.getElementById("hour-12").classList.remove("future");
  document.getElementById("hour-12").classList.add("present");
} else {
  document.getElementById("hour-12").classList.remove("present");
  document.getElementById("hour-12").classList.add("past");
}

saveBtn12.addEventListener("click", function (event) {
  event.preventDefault();

  saved12PM = {
    twelvePM: twelvePM.value,
  };

  localStorage.setItem("saved12PM", JSON.stringify(saved12PM));
});

if (currentHour < 13) {
  document.getElementById("hour-13").classList.add("future");
} else if (currentHour == 13) {
  document.getElementById("hour-13").classList.remove("future");
  document.getElementById("hour-13").classList.add("present");
} else {
  document.getElementById("hour-13").classList.remove("present");
  document.getElementById("hour-13").classList.add("past");
}

saveBtn01.addEventListener("click", function (event) {
  event.preventDefault();

  saved01PM = {
    onePM: onePM.value,
  };

  localStorage.setItem("saved01PM", JSON.stringify(saved01PM));
});

if (currentHour < 14) {
  document.getElementById("hour-14").classList.add("future");
} else if (currentHour == 14) {
  document.getElementById("hour-14").classList.remove("future");
  document.getElementById("hour-14").classList.add("present");
} else {
  document.getElementById("hour-14").classList.remove("present");
  document.getElementById("hour-14").classList.add("past");
}

saveBtn02.addEventListener("click", function (event) {
  event.preventDefault();

  saved02PM = {
    twoPM: twoPM.value,
  };

  localStorage.setItem("saved02PM", JSON.stringify(saved02PM));
});

if (currentHour < 15) {
  document.getElementById("hour-15").classList.add("future");
} else if (currentHour == 15) {
  document.getElementById("hour-15").classList.remove("future");
  document.getElementById("hour-15").classList.add("present");
} else {
  document.getElementById("hour-15").classList.remove("present");
  document.getElementById("hour-15").classList.add("past");
}

saveBtn03.addEventListener("click", function (event) {
  event.preventDefault();

  saved03PM = {
    threePM: threePM.value,
  };

  localStorage.setItem("saved03PM", JSON.stringify(saved03PM));
});

if (currentHour < 16) {
  document.getElementById("hour-16").classList.add("future");
} else if (currentHour == 16) {
  document.getElementById("hour-16").classList.remove("future");
  document.getElementById("hour-16").classList.add("present");
} else {
  document.getElementById("hour-16").classList.remove("present");
  document.getElementById("hour-16").classList.add("past");
}

saveBtn04.addEventListener("click", function (event) {
  event.preventDefault();

  saved04PM = {
    fourPM: fourPM.value,
  };

  localStorage.setItem("saved04PM", JSON.stringify(saved04PM));
});

if (currentHour < 17) {
  document.getElementById("hour-17").classList.add("future");
} else if (currentHour == 17) {
  document.getElementById("hour-17").classList.remove("future");
  document.getElementById("hour-17").classList.add("present");
} else {
  document.getElementById("hour-17").classList.remove("present");
  document.getElementById("hour-17").classList.add("past");
}

saveBtn05.addEventListener("click", function (event) {
  event.preventDefault();

  saved05PM = {
    fivePM: fivePM.value,
  };

  localStorage.setItem("saved05PM", JSON.stringify(saved05PM));
});

if (localStorage.getItem("saved09AM") !== null) {
  var nine = JSON.parse(localStorage.getItem("saved09AM"));
  document.getElementById("nineAM").innerHTML = nine.nineAM;
} else {
  document.getElementById("nineAM").innerHTML = "";
  saved09AM = {
    nineAM: nineAM.value,
  };
  localStorage.setItem("saved09AM", JSON.stringify(saved09AM));
}

if (localStorage.getItem("saved10AM") !== null) {
  var ten = JSON.parse(localStorage.getItem("saved10AM"));
  document.getElementById("tenAM").innerHTML = ten.tenAM;
} else {
  document.getElementById("tenAM").innerHTML = "";
  saved10AM = {
    tenAM: tenAM.value,
  };
  localStorage.setItem("saved10AM", JSON.stringify(saved10AM));
}

if (localStorage.getItem("saved11AM") !== null) {
  var eleven = JSON.parse(localStorage.getItem("saved11AM"));
  document.getElementById("elevenAM").innerHTML = eleven.elevenAM;
} else {
  document.getElementById("elevenAM").innerHTML = "";
  saved11AM = {
    elevenAM: elevenAM.value,
  };
  localStorage.setItem("saved11AM", JSON.stringify(saved11AM));
}

if (localStorage.getItem("saved12PM") !== null) {
  var twelve = JSON.parse(localStorage.getItem("saved12PM"));
  document.getElementById("twelvePM").innerHTML = twelve.twelvePM;
} else {
  document.getElementById("twelvePM").innerHTML = "";
  saved12PM = {
    twelvePM: twelvePM.value,
  };
  localStorage.setItem("saved12PM", JSON.stringify(saved12PM));
}

if (localStorage.getItem("saved01PM") !== null) {
  var one = JSON.parse(localStorage.getItem("saved01PM"));
  document.getElementById("onePM").innerHTML = one.onePM;
} else {
  document.getElementById("onePM").innerHTML = "";
  saved01PM = {
    onePM: onePM.value,
  };
  localStorage.setItem("saved01PM", JSON.stringify(saved01PM));
}

if (localStorage.getItem("saved02PM") !== null) {
  var two = JSON.parse(localStorage.getItem("saved02PM"));
  document.getElementById("twoPM").innerHTML = two.twoPM;
} else {
  document.getElementById("twoPM").innerHTML = "";
  saved02PM = {
    twoPM: twoPM.value,
  };
  localStorage.setItem("saved02PM", JSON.stringify(saved02PM));
}

if (localStorage.getItem("saved03PM") !== null) {
  var three = JSON.parse(localStorage.getItem("saved03PM"));
  document.getElementById("threePM").innerHTML = three.threePM;
} else {
  document.getElementById("threePM").innerHTML = "";
  saved03PM = {
    threePM: threePM.value,
  };
  localStorage.setItem("saved03PM", JSON.stringify(saved03PM));
}

if (localStorage.getItem("saved04PM") !== null) {
  var four = JSON.parse(localStorage.getItem("saved04PM"));
  document.getElementById("fourPM").innerHTML = four.fourPM;
} else {
  document.getElementById("fourPM").innerHTML = "";
  saved04PM = {
    fourPM: fourPM.value,
  };
  localStorage.setItem("saved04PM", JSON.stringify(saved04PM));
}

if (localStorage.getItem("saved05PM") !== null) {
  var five = JSON.parse(localStorage.getItem("saved05PM"));
  document.getElementById("fivePM").innerHTML = five.fivePM;
} else {
  document.getElementById("fivePM").innerHTML = "";
  saved05PM = {
    fivePM: fivePM.value,
  };
  localStorage.setItem("saved05PM", JSON.stringify(saved05PM));
}
