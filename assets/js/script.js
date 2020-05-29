var currentDate = moment().format("dddd MMMM, Do");


var displayDate = function(){
    $("#currentDay").text(currentDate);
}

displayDate();