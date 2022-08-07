// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the details in JQuery
        var text = $(this).siblings(".details").val();
        var time = $(this).siblings().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        //get current number of hours.
        var timeNow = moment().hours();

        // loop over time blocks
        $(".time").each(function () {
            var time = parseInt($(this).attr("id"));

            // To check the time and add the classes for background indicators
            if (time < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (time === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Get item from local storage if any
    $("#8 .details").val(localStorage.getItem("08:00"));
    $("#9 .details").val(localStorage.getItem("09:00"));
    $("#10 .details").val(localStorage.getItem("10:00"));
    $("#11 .details").val(localStorage.getItem("11:00"));
    $("#12 .details").val(localStorage.getItem("12:00"));
    $("#13 .details").val(localStorage.getItem("13:00"));
    $("#14 .details").val(localStorage.getItem("14:00"));
    $("#15 .details").val(localStorage.getItem("15:00"));
    $("#16 .details").val(localStorage.getItem("16:00"));
    $("#17 .details").val(localStorage.getItem("17:00"));

    timeTracker();
})