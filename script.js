
const today = moment().format("MMM Do YY")
$("#currentDay").text(today);
const currentHour = +moment().format("HHmm")
const $timeSlots = $("#time-slots");

for(let i = 6; i<= 17; i++) {
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
   var timeSlots = $("<div>")
     .addClass("row time-block")
   .attr("id", `hour-${hour}`);
   var $hour = $("<div>").addClass("col-md-1 hour").text(formatHour(hour));
   var $textarea = $("<textarea>").addClass("col-md-10 description" + background);
   var $button = $("<button>")
     .addClass("btn saveBtn col-md-1")
     .append($("<i>").addClass("fas fa-save"));   

    return $timeSlots.append($hour, $textarea, $button);      
}
function formatHour(hour){
   if(hour>12) {
     return `${hour - 12}PM`;
  }    
 return `${hour}AM`; 
    
}
console.log(localStorage.getItem("hour-6"));
console.log(localStorage.getItem("hour-12"));
$(".time-block").each(function () {
  var id = $(this).attr("id");
  var storedDescription = localStorage.getItem(id);
  console.log(id);
});
$(".saveBtn").on("click", function () {
  var id= $(this).parent().attr("id");
  var description = $(this).siblings("textarea").val();
   localStorage.setItem(id, description);
   console.log(description);
   console.log(id);
});
