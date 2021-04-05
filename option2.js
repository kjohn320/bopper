var customTextbox;
var saveButton;
var customBopper;
var bopperClick;




$(document).ready(function () {

    var customBopper;
    
    console.log(customBopper);
    
//upload and display image if custom img is chosen    
$("#boppers").on('change',':file', function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
            
        }
        
});

 if(localStorage.img) {         
        $("#myImg").attr("src",localStorage.img);
        $("#customImg").show();
    }    
    
//set custom text from local storage    
$("#tbCustomTxt").val(localStorage.getItem("text"));

//set range from local storage
$("#range").val(localStorage.getItem("Speed"));

//TODO: change to jquery
//get radioed bopper and set as checked
radioed = localStorage.getItem("Bopper");   
var radio_checked = document.getElementsByName("bopper");// list of radio buttons//
for(var i=0;i<radio_checked.length;i++){
  if(radio_checked[i].value == radioed){
      radio_checked[i].checked = true; // marking the required radio as checked
  }
}
    
backradioed = localStorage.getItem("background");   
    console.log(localStorage.getItem("background"));
var radio_checked2 = document.getElementsByName("background");// list of radio buttons//
for(var i=0;i<radio_checked2.length;i++){
  if(radio_checked2[i].value == backradioed){
      radio_checked2[i].checked = true; // marking the required radio as checked
  }
}    
 
    
//TODO: why does this need to be inside .ready?    
$("#btSave").click(function () {             
    localStorage.setItem('text', $('#tbCustomTxt').val());  
    localStorage.setItem('Speed',document.getElementById("range").value);
    localStorage.setItem('Bopper',$('input[name=bopper]:checked').val());    localStorage.setItem('background',$('input[name=background]:checked').val());
   
    
if($('input[name=bopper]:checked').val()== "custom"){
//TESTTTT TESTT TESTT
    var customImage = document.getElementById("myImgSize");

// Take action when the image has loaded
    var imgCanvas = document.createElement("canvas"),
        imgContext = imgCanvas.getContext("2d");

    // Make sure canvas is as big as the picture
    imgCanvas.width = customImage.width;
    imgCanvas.height = customImage.height;

    // Draw image into canvas element
    imgContext.drawImage(customImage, 0, 0, customImage.width, customImage.height);

    // Get canvas contents as a data URL
    var imgAsDataURL = imgCanvas.toDataURL("image/png");

    // Save image into localStorage
    try {
        localStorage.setItem("Bopper", imgAsDataURL);       
    }
    catch (e) {
        console.log("Storage failed: " + e);
    }
}
});
    
});



//TODO: image is no longer changing when uploading differnt image
function imageIsLoaded(e) {
    $('#myImg').attr('src', e.target.result);
    
    $('#myImg').attr('value', e.target.result);
    $("#customImg").show();
    localStorage.setItem('img', e.target.result);
  
    
     $('#myImgSize').attr('src', e.target.result);
    
    $('#myImgSize').attr('value', e.target.result);
};

   


//TESTING CUSTOM IMAGE SAVE
//
//
//
//





