const today = moment().format("MMM Do YY")
$("#currentDay").text(today);
const currentHour = +moment().format("HH")
const $timeSlots = $("#time-slots");

for(let i = 9; i<= 17; i++) {
   $timeSlots.append(buildTimeSlot(i)); 
}    
function buildTimeSlot(hour) {
  var background;  
    if (currentHour === hour) {
        background = "present";
    } else if (currentHour > hour) {
        background = "past";
    } else {
        background = "future";
    }
    var timeSlot = $("<div>")
        .addClass("row time-block")
        .attr("id", `hour-${hour}`);
    var $hour = $("<div>").addClass("col-md-1 hour").text(formatHour(hour));
    var $textarea = $("<textarea>").addClass("col-md-10 description" + background);
    var $button = $("<button>")
        .addClass("btn saveBtn col-md-1")
        .append($("<i>").addClass("fas fa-save"));   

      return $timeSlot.append($hour, $textarea, $button);      
}
function formatHour(hour){
    if(hour>12) {
        return `${hour - 12}PM`;
    }    
    return `${hour}AM`; 
    
}