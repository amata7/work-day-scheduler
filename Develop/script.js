var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

var currentHour = moment().format('HH')

var saveBtn09 = document.getElementById('save09');
var saveBtn10 = document.getElementById('save10');
var saveBtn11 = document.getElementById('save11');
var saveBtn12 = document.getElementById('save12');
var saveBtn01 = document.getElementById('save01');
var saveBtn02 = document.getElementById('save02');
var saveBtn03 = document.getElementById('save03');
var saveBtn04 = document.getElementById('save04');
var saveBtn05 = document.getElementById('save05');

var nineAM = document.getElementById('nineAM');
var tenAM = document.getElementById('tenAM');
var elevenAM = document.getElementById('elevenAM');
var twelvePM = document.getElementById('twelvePM');
var onePM = document.getElementById('onePM');
var twoPM = document.getElementById('twoPM');
var threePM = document.getElementById('threePM');
var fourPM = document.getElementById('fourPM');
var fivePM = document.getElementById('fivePM');

    
if (currentHour < 09) {
    document.getElementById("hour-9").classList.add('future');
} else if (currentHour == 09){
    document.getElementById("hour-9").classList.remove('future');
    document.getElementById("hour-9").classList.add('present');
} else {
    document.getElementById("hour-9").classList.remove('present');
    document.getElementById("hour-9").classList.add('past');
}

saveBtn09.addEventListener("click", function (event) {
    event.preventDefault();
  
    var saved09AM = {
      nineAM: nineAM.value,
    };

    localStorage.setItem("saved09AM", JSON.stringify(saved09AM));
    
});



if (currentHour < 10) {
    document.getElementById("hour-10").classList.add('future');
} else if (currentHour == 10){
    document.getElementById("hour-10").classList.remove('future');
    document.getElementById("hour-10").classList.add('present');
} else {
    document.getElementById("hour-10").classList.remove('present');
    document.getElementById("hour-10").classList.add('past');
}

saveBtn10.addEventListener("click", function (event) {
    event.preventDefault();
  
    var saved10AM = {
      tenAM: tenAM.value,
    };

    localStorage.setItem("saved10AM", JSON.stringify(saved10AM));
});



if (currentHour < 11) {
    document.getElementById("hour-11").classList.add('future');
} else if (currentHour == 11){
    document.getElementById("hour-11").classList.remove('future');
    document.getElementById("hour-11").classList.add('present');
} else {
    document.getElementById("hour-11").classList.remove('present');
    document.getElementById("hour-11").classList.add('past');
}

saveBtn11.addEventListener("click", function (event) {
    event.preventDefault();
  
    var saved11AM = {
      elevenAM: elevenAM.value,
    };

    localStorage.setItem("saved11AM", JSON.stringify(saved11AM));
});



if (currentHour < 12) {
    document.getElementById("hour-12").classList.add('future');
} else if (currentHour == 12){
    document.getElementById("hour-12").classList.remove('future');
    document.getElementById("hour-12").classList.add('present');
} else {
    document.getElementById("hour-12").classList.remove('present');
    document.getElementById("hour-12").classList.add('past');
}

saveBtn12.addEventListener("click", function (event) {
    event.preventDefault();
  
    var saved12PM = {
      twelvePM: twelvePM.value,
    };

    localStorage.setItem("saved12PM", JSON.stringify(saved12PM));
});



if (currentHour < 13) {
    document.getElementById("hour-13").classList.add('future');
} else if (currentHour == 13){
    document.getElementById("hour-13").classList.remove('future');
    document.getElementById("hour-13").classList.add('present');
} else {
    document.getElementById("hour-13").classList.remove('present');
    document.getElementById("hour-13").classList.add('past');
}

saveBtn01.addEventListener("click", function (event) {
    event.preventDefault();
  
    var saved01PM = {
      onePM: onePM.value,
    };

    localStorage.setItem("saved01PM", JSON.stringify(saved01PM));
});



if (currentHour < 14) {
    document.getElementById("hour-14").classList.add('future');
} else if (currentHour == 14){
    document.getElementById("hour-14").classList.remove('future');
    document.getElementById("hour-14").classList.add('present');
} else {
    document.getElementById("hour-14").classList.remove('present');
    document.getElementById("hour-14").classList.add('past');
}

saveBtn02.addEventListener("click", function (event) {
    event.preventDefault();
  
    var saved02PM = {
      twoPM: twoPM.value,
    };

    localStorage.setItem("saved02PM", JSON.stringify(saved02PM));
});



if (currentHour < 15) {
    document.getElementById("hour-15").classList.add('future');
} else if (currentHour == 15){
    document.getElementById("hour-15").classList.remove('future');
    document.getElementById("hour-15").classList.add('present');
} else {
    document.getElementById("hour-15").classList.remove('present');
    document.getElementById("hour-15").classList.add('past');
}

saveBtn03.addEventListener("click", function (event) {
    event.preventDefault();
  
    var saved03PM = {
      threePM: threePM.value,
    };

    localStorage.setItem("saved03PM", JSON.stringify(saved03PM));
});



if (currentHour < 16) {
    document.getElementById("hour-16").classList.add('future');
} else if (currentHour == 16){
    document.getElementById("hour-16").classList.remove('future');
    document.getElementById("hour-16").classList.add('present');
} else {
    document.getElementById("hour-16").classList.remove('present');
    document.getElementById("hour-16").classList.add('past');
}

saveBtn04.addEventListener("click", function (event) {
    event.preventDefault();
  
    var saved04PM = {
      fourPM: fourPM.value,
    };

    localStorage.setItem("saved04PM", JSON.stringify(saved04PM));
});



if (currentHour < 17) {
    document.getElementById("hour-17").classList.add('future');
} else if (currentHour == 17){
    document.getElementById("hour-17").classList.remove('future');
    document.getElementById("hour-17").classList.add('present');
} else {
    document.getElementById("hour-17").classList.remove('present');
    document.getElementById("hour-17").classList.add('past');
}

saveBtn05.addEventListener("click", function (event) {
    event.preventDefault();
  
    var saved05PM = {
      fivePM: fivePM.value,
    };

    localStorage.setItem("saved05PM", JSON.stringify(saved05PM));
});
