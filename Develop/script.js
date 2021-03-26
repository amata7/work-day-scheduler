var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

// var currentHour = moment().format('HH')
// console.log(currentHour);
var currentHour = 18;

if (currentHour < 09) {
    document.getElementById("hour-9").classList.add('future');
} else if (currentHour == 09){
    document.getElementById("hour-9").classList.remove('future');
    document.getElementById("hour-9").classList.add('present');
} else {
    document.getElementById("hour-9").classList.remove('present');
    document.getElementById("hour-9").classList.add('past');
}


if (currentHour < 10) {
    document.getElementById("hour-10").classList.add('future');
} else if (currentHour == 10){
    document.getElementById("hour-10").classList.remove('future');
    document.getElementById("hour-10").classList.add('present');
} else {
    document.getElementById("hour-10").classList.remove('present');
    document.getElementById("hour-10").classList.add('past');
}


if (currentHour < 11) {
    document.getElementById("hour-11").classList.add('future');
} else if (currentHour == 11){
    document.getElementById("hour-11").classList.remove('future');
    document.getElementById("hour-11").classList.add('present');
} else {
    document.getElementById("hour-11").classList.remove('present');
    document.getElementById("hour-11").classList.add('past');
}


if (currentHour < 12) {
    document.getElementById("hour-12").classList.add('future');
} else if (currentHour == 12){
    document.getElementById("hour-12").classList.remove('future');
    document.getElementById("hour-12").classList.add('present');
} else {
    document.getElementById("hour-12").classList.remove('present');
    document.getElementById("hour-12").classList.add('past');
}


if (currentHour < 13) {
    document.getElementById("hour-13").classList.add('future');
} else if (currentHour == 13){
    document.getElementById("hour-13").classList.remove('future');
    document.getElementById("hour-13").classList.add('present');
} else {
    document.getElementById("hour-13").classList.remove('present');
    document.getElementById("hour-13").classList.add('past');
}


if (currentHour < 14) {
    document.getElementById("hour-14").classList.add('future');
} else if (currentHour == 14){
    document.getElementById("hour-14").classList.remove('future');
    document.getElementById("hour-14").classList.add('present');
} else {
    document.getElementById("hour-14").classList.remove('present');
    document.getElementById("hour-14").classList.add('past');
}


if (currentHour < 15) {
    document.getElementById("hour-15").classList.add('future');
} else if (currentHour == 15){
    document.getElementById("hour-15").classList.remove('future');
    document.getElementById("hour-15").classList.add('present');
} else {
    document.getElementById("hour-15").classList.remove('present');
    document.getElementById("hour-15").classList.add('past');
}


if (currentHour < 16) {
    document.getElementById("hour-16").classList.add('future');
} else if (currentHour == 16){
    document.getElementById("hour-16").classList.remove('future');
    document.getElementById("hour-16").classList.add('present');
} else {
    document.getElementById("hour-16").classList.remove('present');
    document.getElementById("hour-16").classList.add('past');
}


if (currentHour < 17) {
    document.getElementById("hour-17").classList.add('future');
} else if (currentHour == 17){
    document.getElementById("hour-17").classList.remove('future');
    document.getElementById("hour-17").classList.add('present');
} else {
    document.getElementById("hour-17").classList.remove('present');
    document.getElementById("hour-17").classList.add('past');
}