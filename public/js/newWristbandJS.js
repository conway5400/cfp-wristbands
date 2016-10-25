$( function () {
    console.log("Page loaded");
    $('#newProfileForm').hide();
})

$('#newWristbandForm').on('submit', function (event) {
    
    console.log("inside new wristband form trigger!")
    
    event.preventDefault(); // Stop the form from causing a page refresh.
    
    var postURL = "/api/wristbands";
    
    console.log(postURL);
    
    $.ajax({
      url: postURL,
      data: $("#newWristbandForm").serialize(),
      method: 'POST'
    }).then(function (res) {
        
        var results = JSON.parse(res);
        
        if (results.wristbandExist == true) {
            
            alert("Error: " + res);
            $('#newProfileForm').hide();
            
        } else {
            
            $('#wristbandSubmitButton').prop("disabled",true);
            $("#newProfileForm input, #newProfileForm button").prop("disabled", false);
            $('#rfidNumberField').val($('#rfidNumberInput').val());            
            $('#newProfileForm').show();
            
        }
    });
});  


$('#newProfileForm').on('submit', function (event) {
    
    console.log("inside new profile form trigger!")
    
    event.preventDefault(); // Stop the form from causing a page refresh.
    
    var postURL = "/api/profiles";
    
    console.log(postURL);
    
    $.ajax({
      url: postURL,
      data: $("#newProfileForm").serialize(),
      method: 'POST'
    }).then(function (res) {
        
        if(res == true) {
            alert("Succesfully added new profile!");
            window.location.replace('/');        
        }

    });
});

$('#rfidNumberInput').on('keydown', function(event) {
    
    if($('#wristbandSubmitButton').prop("disabled") == true) {
        
        $("#newProfileForm input, #newProfileForm button").prop("disabled", true);
        $('#wristbandSubmitButton').prop("disabled", false);
        
        console.log("button is disabled");
        
    };
    
});