var currentDate = moment().format("dddd MMMM, Do");
var timeArray = {};
var timeBlockArray = {};


var displayDate = function () {
    $("#currentDay").text(currentDate);
}

displayDate();



//using jquery we need to select all of the rows
//this should be an array
var timeArray = $(".text-col");
//loop through the array

// for every iteration of the array we need to know what time we are looking at
$.each(timeArray, function (i, timeEl) {
    var hourCheck = $(timeEl).data("hour");

    $(timeEl).removeClass("past present future")

    if (moment().isAfter(hourCheck)) {
        $(timeEl).addClass("past");
    }
    else if (moment().isBefore(hourCheck)) {
        $(timeEl).addClass("future");
    }
    else if (moment().isSame(hourCheck)) {
        $(timeEl).addClass("present");
    }
    console.log(hourCheck);
})


// logic will decide if in the past, present, future
// add the relevant class to the div