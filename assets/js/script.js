$(document).ready(function () {

    var currentDate = moment().format("dddd MMMM, Do");
    var timeArray = {};
    var timeBlockArray = [];

    // this displays any text in the time blocks.
    function displayText() {
        $.each(timeBlockArray, function (i, getText) {
            $("#tb" + i).val(getText);
        })
    }

    // this function gets the text from the array in localstorage
    var loadText = function () {
        // key name "timeblockarray" is set on line 28
        var getText = JSON.parse(localStorage.getItem("timeBlockArray"));
        if (getText) {
            timeBlockArray = getText;
        }
        displayText();
    }

    loadText();

    // saves any input in the time blocks to an array in local storage
    var saveBlockText = function () {
        localStorage.setItem("timeBlockArray", JSON.stringify(timeBlockArray));
    }

    saveBlockText();

    //this displays the current date at the top of the page underneath the header
    var displayDate = function () {
        $("#currentDay").text(currentDate);
    }

    displayDate();

    // this function colors the time blocks based on the current time
    var timeColor = function () {
        //using jquery we need to select all of the rows
        var timeArray = $(".text-col");

        // loop through the array. for every iteration of the array we need to know what time we are looking at
        $.each(timeArray, function (i, timeEl) {
            var hourCheck = $(timeEl).data("hour");
            var currentHour = moment().hour();

            // this will clear the time blocks of any previous styles.
            $(timeEl).removeClass("past present future");

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

    $(".saveBtn").on("click", function () {
        for (i = 0; i < 9; i++) {
            // .push() is not used here because it adds additional arrays to time block array every time the data is saved.
            // instead the [i] updates the current position in the array and overwrites any old values. 
            timeBlockArray[i] = $("#tb" + i).val();
        }
        saveBlockText();
    })

    // timers

    setInterval(function () {
        timeColor();
    }, 1000);

    setInterval(function () {
        currentDate = moment().format("dddd MMMM, Do");
        displayDate();
    }, 1000);

});