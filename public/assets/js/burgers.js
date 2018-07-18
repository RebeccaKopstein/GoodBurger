$(function() {
    $(".devour-burger").on("click", function(event) {
      var id = $(this).data("id");
    //   var newSleep = $(this).data("newsleep");
  
    //   var newSleepState = {
    //     sleepy: newSleep
    //   };
  
      // Send the PUT request.
      $.ajax("/burgers/update/" + id, {
        type: "PUT"
        // data: newSleepState
      }).then(
        function() {
          console.log("Devoured it");
          // Reload the page to get the updated list
          location.reload();
        }
      );
   
    });
})