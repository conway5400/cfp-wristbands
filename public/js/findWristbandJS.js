$( function () {
    console.log("Page loaded");
    $('#pinNumberField').hide();
})

$('#findWristbandForm').on('submit', function (event) {
    
    console.log("inside find wristband form trigger!")
    
    event.preventDefault(); // Stop the form from causing a page refresh.
    
    var postURL = "/api/wristbands";
    
    $.ajax({
      url: postURL,
      data: $("#findWristbandForm").serialize(),
      method: 'GET'
    }).then(function (res) {
        
        var jsonResponse = JSON.parse(res);
        
        console.log(jsonResponse);
        
        if(jsonResponse.wristbandExist == false) {
            alert("No wristband found. Please set up this wristband.");
        }
        
        if (jsonResponse.pinRequired == true) {
            $('#pinNumberField').show();
        } 
        
        if (jsonResponse.hasOwnProperty('data')) {
            window.location.replace('/wristbands/' + jsonResponse.data._id);
        }

        
    });
});  


