var currentDate = moment().format("dddd MMMM, Do");
var timeArray = {};
var timeBlockArray = {};


var displayDate = function () {
    $("#currentDay").text(currentDate);
}

displayDate();


var timeColor = function() {
//using jquery we need to select all of the rows
//this should be an array
var timeArray = $(".text-col");

//loop through the array
// for every iteration of the array we need to know what time we are looking at
$.each(timeArray, function (i, timeEl) {
    var hourCheck = $(timeEl).data("hour");
    var currentHour = moment().hour();
    console.log(currentHour);
    $(timeEl).removeClass("past present future")

    // logic will decide if in the past, present, future
    if (moment(currentHour).isAfter(hourCheck)) {
        // add the relevant class to the div
        $(timeEl).addClass("past");
    }
    else if (moment(currentHour).isBefore(hourCheck)) { 
        $(timeEl).addClass("future");
    }
    else if (moment(currentHour).isSame(hourCheck)) {
        $(timeEl).addClass("present");
    }
})
}

timeColor();

setInterval(function () {
    $(".text-col").each(function (tc) {
      timeColor(tc);
    });
  }, 900000);

setInterval(function () {
    $("#currentDay").each(function (td) {
        displayDate(td);
    });
}, 1800000);
