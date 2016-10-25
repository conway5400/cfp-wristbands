$( function () {
    console.log("Page loaded");
    $('#saveButton').hide();
    $("#viewProfileForm input").prop("disabled", true);
    $(".form-check-input").attr("disabled", true);
});

$('#editButton').on('click', function(){
    $('#editButton').prop("disabled",true);
    $("input.group1").removeAttr("disabled");
    $('#saveButton').show();
    $("#viewProfileForm input").prop("disabled", false);
});

$('#saveButton').on('click', function(){
   
    var postURL = "/api/wristbands?_method=PUT";
    
    console.log(postURL);
    
    event.preventDefault();
    
    $.ajax({
      url: postURL,
      data: $("#viewProfileForm").serialize(),
      method: 'PUT'
    }).then(function (res) {
        
        var results = JSON.parse(res);
        
    }); 
});