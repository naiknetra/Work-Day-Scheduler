// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
 var currentHour = dayjs().hour();
  var saveBtn = $(".saveBtn");
  var timeBlock = $(".time-block")
  timeBlock.each( (i,time) => {
    console.log(time)
    var parentId = $(time).attr("id");

    console.log(parentId);
    var timeHour = parentId.replace("hour-", "")

    timeHour = parseInt(timeHour);

    var textArea = $("#"+ parentId).children("textarea")
    textArea.val(localStorage.getItem(parentId))
    if (timeHour === currentHour){
      textArea.addClass("present")
    }
    else if (timeHour < currentHour){
      textArea.addClass("past")
    }
    else { 
      textArea.addClass("future")
    }


  })
  function saveEvent(event){
  var textArea = $(event.target).siblings("textarea")
  var parentId = $(event.target).parent().attr("id")
  if ($(event.target).attr("class") === "fas fa-save" ){
    textArea = $(event.target).parent().siblings("textarea")
  }
  localStorage.setItem(parentId , textArea.val() )
  }

$(saveBtn).on("click" , saveEvent)
  



  

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  });


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  

  // TODO: Add code to display the current date in the header of the page.

  function currentDate() {
    // step1: Calculate current date in a variable
    // 1. What is today's date in the following format: Jan 1st, 1999?
    var today = dayjs();
    $('#currentDay').text(today.format('MMMM DD, YYYY'));

    
    
    


    
  }
  function setPastPresentFuture(){
    var now = new Date();
    var x = now.getHours();
    var eleTimeBlocks = querySelectorAll("time-block");
  }
// Update the date every second
setInterval(currentDate, 1000);

// Initial call to display the date immediately
currentDate();


   









    
  

